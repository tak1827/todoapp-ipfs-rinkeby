# Todoapp hosted IPFS using Rinkeby as DB.

This todo app is for demo to confirm whether we can achieve no server and no operation cost by using IPFS and Ethereum test net.

Blog Post: [Creating No server and No operation cost web service via IPFS and Ethereum test net](https://medium.com/@t.tak/creating-no-server-and-no-operation-cost-web-service-via-ipfs-and-ethereum-test-net-2af564e0b24)

The IPFS hosted URI: [Todo App hosted by IPFS](https://ipfs.io/ipfs/QmbSmusBfhQfeX6DXNjBP1VBXcFVFGnD5L7qAbUTQKKV8c/)

The deployment transaction for Rinkeby: [0x009cb33c975a53c6b6f5144a4283d52453b8bc261fa7fe8cc6126bb62eecf849](https://rinkeby.etherscan.io/tx/0x009cb33c975a53c6b6f5144a4283d52453b8bc261fa7fe8cc6126bb62eecf849)

## Set project step by step

### Compile Ethereum smart contract
Install truffle, then run compile command.<br>
`truffle compile`

### Deploy smart contract
Make sure that your local geth or test rpc are running, then run migrate command.<br>
`truffle migrate --reset --network <target network>`

### Prepare react client
Move to client directory, then run install command.<br>
`npm install`<br>
And run following command to create link to refer contract json file.<br>
`npm run link-contracts`<br>
At last, change facebook OAuth api link for your environoment.<br>
`vi client/src/components/LoginForm.js `

### Run server
Move to client directory, then run start command.<br>
`npm start`<br>
Access to https://localhost/

