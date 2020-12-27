import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button } from './Button';
import Dropdown from './Dropdown';

function Navbar() {

   
    const [dropdown, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

   

    useEffect(()=>{
        showButton()
    },[]) //pass-in empty array

    window.addEventListener('resize', showButton);

    return (
       <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    CMPS Global Media <i className='fab fa-typo3' />
               </Link> 
               <div className='menu-icon' onClick={handleClick}>
                   <i className={click ? 'fas fa-times': 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                           Home
                       </Link>
                   </li>
                   <li className='nav-item' onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
                       <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                           Services
                       </Link>
                       {dropdown && <Dropdown />}
                   </li>
                   <li className='nav-item'>
                       <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                           Portfolio
                       </Link>
                   </li>
                   <li className='nav-item'>
                       <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                           Contact Us
                       </Link>
                   </li>
               </ul>
               {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
           </div>
       </nav>

       </>
    )
}

export default Navbar
