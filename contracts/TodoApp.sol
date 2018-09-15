pragma solidity ^0.4.24;

contract TodoApp {

  struct User {
    uint id;
    string email;
    string picture;
  }

  struct Todo {
    uint id;
    string txt;
    bool completed;
  }

  mapping(address => User) addressToUser;

  mapping(uint => Todo[]) userIdToTodos;

  uint public totalUsers;
  
  event UserRegisterd(uint userId, string email, string picture);
  
  event TodoCreated(uint userId, uint id, string txt);
  
  event TodoUpdated(uint userId, uint id, string txt, bool completed);
  
  modifier loginUserOnly {
    require(addressToUser[msg.sender].id != 0, "Please login at first");
    _;
  }

  // Register user newly
  function registerUser(string email, string picture) external {
    require(bytes(email).length != 0, "Argument Error: email is empty");
    require(bytes(picture).length != 0, "Argument Error: picture is empty");
    require(addressToUser[msg.sender].id == 0, "This user have already registerd");

    totalUsers++;
    User storage user = addressToUser[msg.sender];
    user.id = totalUsers;
    user.email = email;
    user.picture = picture;
    
    emit UserRegisterd(totalUsers, user.email, user.picture);
  }

  // Get user info by address
  function getUserInfo() external view returns(uint, string, string) {
    require(addressToUser[msg.sender].id != 0, "This user have not yet registerd");

    User storage user = addressToUser[msg.sender];
    return (user.id, user.email, user.picture);
  }


  // Create todo newly
  function createrTodo(uint id, string txt) external loginUserOnly {
    require(bytes(txt).length != 0, "Argument Error: txt is empty");
    require(findTodoById(msg.sender, id) == -1, "Argument Error: id is duplicated");

    Todo[] storage todos = userIdToTodos[ addressToUser[msg.sender].id ];
    todos.push( Todo(id, txt, false) );
    
    emit TodoCreated(addressToUser[msg.sender].id, id, txt);
  }

  // Update too by id
  function updateTodo(uint id, string txt, bool completed) external loginUserOnly {
    require(bytes(txt).length != 0, "Argument Error: txt is empty");
    int index = findTodoById(msg.sender, id);
    require(index != -1, "Argument Error: id don't exist");

    Todo storage todo = userIdToTodos[ addressToUser[msg.sender].id ][uint(index)];
    todo.txt = txt;
    todo.completed = completed;
    
    emit TodoUpdated(addressToUser[msg.sender].id, id, txt, completed);
  }

  // Get total todo number user having
  function getTotalTodo() public view loginUserOnly returns (uint) {
    return userIdToTodos[ addressToUser[msg.sender].id ].length;
  }

  // Get todo by searching with array index
  function getTodoByIndex(uint index) external view loginUserOnly returns (uint, string, bool) {
    require(getTotalTodo() > index, "Argument Error: index don't exist");

    Todo storage todo = userIdToTodos[ addressToUser[msg.sender].id ][index];
    return (todo.id, todo.txt, todo.completed);
  }

  // Find todo by searching with id
  // Retrun array index if todo find.
  // Return -1, if todo don't find.
  function findTodoById(address addr, uint id) internal view returns (int) {
    uint userId = addressToUser[addr].id;
    Todo[] storage todos = userIdToTodos[userId];
    int index = -1;

    for(uint i = 0; i <todos.length; i++) {
      if (todos[i].id == id) {
        index = int(i);
        break;
      }
    }

    return index;
  }

}
