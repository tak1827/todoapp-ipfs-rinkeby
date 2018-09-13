import React from 'react'

const Header = ({email, picture}) => (
  <nav>
    <div className="nav-wrapper teal darken-4">
      <a href="#!" className="brand-logo">Todo App hosted by IPFS</a>
      <ul className="right hide-on-med-and-down">
        <li>{email}</li>
        { picture ? (
          <li><img src={picture} style={{margin: '7px 7px 0 16px'}}/></li>
        ) : (
          <li><i className="material-icons" style={{margin: '0 16px'}}>account_circle</i></li>
        )}
      </ul>
    </div>
  </nav>
)

export default Header
