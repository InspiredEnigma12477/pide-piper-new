import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { DropdownData } from './DropdownData';
import { DropdownData } from './DropdownData';

function Dropdown() {
    return (
        <div>
            
        </div>
    )
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

export default Dropdown
