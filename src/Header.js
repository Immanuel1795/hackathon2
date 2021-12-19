import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useHistory } from "react-router-dom";

function Header(props) {
  const [click, setClick] = useState(false);

  const history = useHistory();

  const handleClick = () => setClick(!click);

  function signout(){
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    localStorage.removeItem('username');
    history.push('/')
    props.setUserSign(false)
    props.setAdminsign(false)
}

const type = localStorage.getItem("type");

  return (
    <>
      <nav className="navvbar">
        <div className="navv-container">
          <Link to="/" className="navv-logo">
            Pizzas
            <i class="fas fa-pizza-slice"></i>
          </Link>

          {props.adminsign || props.usersign ? 

          type === "user" &&  <>
            <ul className={click ? "navv-menu active" : "navv-menu"}>

            <li className="navv-item">
              <Link
                to="/pizzas"
                activeClassName="active"
                className="navv-links"
              >
                Pizzas
              </Link>
            </li>

                
            
            <li className="navv-item">
              <Link
                to=""
                activeClassName="active"
                className="navv-links"
                onClick={signout}
              >
                Signout
              </Link>
            </li>

            <li className="navv-item">
              <Link
                to="/"
                className="navv-links"
              >
               {localStorage.getItem("username")}
              </Link>
            </li>   
          </ul>
        </>
         
          :

          <ul className={click ? "navv-menu active" : "navv-menu"}>
            <li className="navv-item">
              <Link
                to="/users/signup"
                activeClassName="active"
                className="navv-links"
                onClick={handleClick}
              >
                UserSignup
              </Link>
            </li>
            <li className="navv-item">
              <Link
                to="/users/signin"
                activeClassName="active"
                className="navv-links"
                onClick={handleClick}
              >
                UserSignin
              </Link>
            </li>
            <li className="navv-item">
              <Link
                to="/admins/signup"
                activeClassName="active"
                className="navv-links"
                onClick={handleClick}
              >
                AdminSignup
              </Link>
            </li>
            <li className="navv-item">
              <Link
                to="/admins/signin"
                activeClassName="active"
                className="navv-links"
                onClick={handleClick}
              >
                AdminSignin
              </Link>
            </li>
          </ul>

          
          }

         
          <div className="navv-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;