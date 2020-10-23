import React, { useState,  useEffect, useRef  } from 'react';
import {CSSTransition} from 'react-transition-group'
import './App.css';
import * as FaIcons from 'react-icons/fa';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar>
        <Sidebar/>
        <Switch>
          <Route path="/" />
        </Switch>
        
        <Heading/>
        <div className="nav-items flex">
          <NavItem icon="🐱" >
              <DropdownMenu title = "Shivam" />
          </NavItem>

          <NavItem icon="🐷" >
              <DropdownMenu title = "Mansi"/>
          </NavItem>

          <NavItem icon="🦄" >
              <DropdownMenu title = "Pratik"/>
          </NavItem>
          
          <NavItem  icon="🐼">
              <DropdownMenu title = "Ankita"/>
          </NavItem>
          
          <NavItem icon="🧡">
              <DropdownMenu/>
          </NavItem>
        </div>
        </Navbar>
      </Router>   
    < / >
  );
}

function Heading () {
  return(
    <div className="heading flex">
      <h1 className="heading-h1">PDEA's College of Engineering, Manjari</h1>
    </div>
  );  
}

function Navbar(props){
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item flex">
      <a href="#" className="icon-button flex"  onClick={ () => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children }
    </li>
  ); 
}

function DropdownMenu(props){

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el){
    const height =el.offsetHeight;
    setMenuHeight(height);
  }

      var title = props.title;
  

  function DropdownItem(props){
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {title}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return(
    <div className="dropdown" style={{ height: menuHeight }}>

      <CSSTransition 
        in={activeMenu === 'main'} 
        timeout={500}
        className="menu-primary"
        unmountOnExit 
        onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem icon="🍳">My Profile</DropdownItem> 
            <DropdownItem
              leftIcon= "🌑"
              rightIcon= "🌿"
              goToMenu="settings">
              Shivam Sakore
            </DropdownItem>
          </div>
      </CSSTransition>
      
      <CSSTransition 
        in={activeMenu === 'settings'} 
        unmountOnExit 
        timeout={500}
        className="menu-secondary"
        onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem icon="👈" goToMenu="main"/>
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem icon="🍳">My Settings</DropdownItem> 
            <DropdownItem
              leftIcon= "🌑"
              rightIcon= "🌿">
              Shivam Sakore
            </DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
}

export default App;
