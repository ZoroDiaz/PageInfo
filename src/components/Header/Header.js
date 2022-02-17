import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded } from '@material-ui/icons';
import resumenData from '../../utils/resumenData';


const Header = ( props ) => {
  const pathName = props?.location?.pathName;
  return (
    <Navbar expand="lg" sticky='top' className=''>
        {/* Home */}
        <Nav.Link as={NavLink} to='/'>
          <Navbar.Brand className='header_home'>
              <HomeRounded/>
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav>
              {/* Resumen Link */}
              <Nav.Link 
                as ={ NavLink} 
                to='/' 
                className={pathName == '/' ? "header_link_active":"header_link"}>
                  Resumen
              </Nav.Link>

              {/* Portafolio Link */}
              <Nav.Link 
                as ={ NavLink} 
                to='/portafolio' 
                className={pathName == '/portafolio' ? "header_link_active":"header_link"}>
                  Portafolio
              </Nav.Link>
            </Nav>

            <div className='header_right'>
              {Object.keys(resumenData.socials).map(key => (
                <a href={resumenData.socials[key].Link} target="_blank">{resumenData.socials[key].icon}</a>
              ))}
            </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
