import React from "react"
import { NavLink, Link, useLocation } from "react-router-dom";
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
class Login  extends React.Component {
    constructor(props) {
      super(props);    

    }

    render(){
       return(
        <div id="bg-color">
        <div id="container">
            <h1 id="h1">connectez à votre compte</h1>
                 <div id="input">
                      <input type="email" id="mail" placeholder="email"></input>
                        <input type="password" id="pwd" placeholder="mot de passe"></input>
                 </div>
                 <p id="mdp">forget your password?</p>
                 
                 <Nav>
                 <NavLink id="login-btn"
                      to={"admin/dashboard"}
                      className="nav-link"
                      activeClassName="active"
                      
                    >se connecter</NavLink>
                 </Nav>
          </div>
    </div>
       )
    }
}
export default Login