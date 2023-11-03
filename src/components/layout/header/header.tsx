import "./Layout.scss"

import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg"
import account from "../../../assets/account-image.png"
import useScreenSize from "../../../utils/index";

const Header = () => {

  return (
    <header>
      <nav className="nav">
        <div className="container nav__container">
          <NavLink to="/" className="nav__logo">
            <img src={logo} alt="" />
            {useScreenSize > 500 ? "MPortmolio" : "MP"} 
          </NavLink>
          <ul className="nav__menu">
          <li className="nav__item">
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="users/education">
                Education
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="users/skills">
                Skills
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link className="nav__link" to="/user/services">
                Services
              </Link>
            </li> */}
            <li className="nav__item">
              <Link className="nav__link" to="/user/account">
                <div className="account-img">
                <img src={account} alt="" />
                <h6>Me</h6>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header