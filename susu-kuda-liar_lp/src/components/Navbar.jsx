import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "../styles/navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h1>SKL</h1>
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is SKL?</a></p>
          <p><a href="#possibility">Susu Kuda</a></p>
          <p><a href="#features">Shops</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {
          toggleMenu ?
            <RiCloseLine
              fill="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
            :
            <RiMenu3Line
              fill="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
        }
        {
          toggleMenu &&
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wgpt3">What is SKL?</a></p>
              <p><a href="#possibility">Susu Kuda</a></p>
              <p><a href="#features">Shops</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar;