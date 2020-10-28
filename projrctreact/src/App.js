import React, { useState,  useEffect, useRef  } from 'react';
import {CSSTransition} from 'react-transition-group'
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Sidebar from './components/Sidebar/Sidebar';
import {DropdownMenu} from './components/Dropdown/Dropdown'

{/*
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
*/}

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
    </>
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

{/*function DropdownMenu(props){

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])
  function calcHeight(el){
    const height =el.offsetHeight;
    setMenuHeight(height);
  }

      var title = props.title;
  

  function DropdownItem(props){
    return(
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return(
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸" rightIcon= "🌿">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
*/}
export default App;
