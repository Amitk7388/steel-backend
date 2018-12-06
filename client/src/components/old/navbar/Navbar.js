import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        const style={
          width:"70px",
          height:"70px",
          marginLeft:"40px"
        }
      return (
        <nav className="navbar navbar-expand-md py-0   fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home.js">
            <img  style={style} src={require('../../assets/image/logo.png')}/>
          </NavLink>
         
          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul  className="nav navbar-nav navbar-right ml-auto">
            <li className="nav-item">
                <NavLink  className="nav-Link" to="/">HOME</NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-Link" to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-Link" to="/customorder">CUSTOM ORDER</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-Link " to="/">PRODUCTS
                  <div className="dropdown-content">
                    <NavLink to="/c2series">C2 Series</NavLink>
                    <NavLink to="/c4series">C4 Series </NavLink>
                    <NavLink to="/c9series">C9 Series </NavLink>
                    <NavLink to="/u2series">U2 Series</NavLink>
                    <NavLink to="/u9series">U9 Series</NavLink>
                    <NavLink to="/u4series">U4 Series</NavLink>
                  </div>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-Link" to="/thesciencce">THE SCIENCE</NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-Link" to="/news">NEWS</NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-Link" to="/mediakit">MEDIA KIT</NavLink>
              </li> 
              <li className="nav-item">
                <NavLink className="nav-Link" to="/contact">CONTACT</NavLink>
              </li>  
              <li className="nav-item">
                <NavLink className="nav-Link" to="/login">LOGIN</NavLink>
              </li> 
            </ul>
            </div>
          </div> 
        </nav>
      );
    }
}

export default Navbar