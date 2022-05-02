import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded,Telegram } from '@material-ui/icons';
import resumenData from '../../utils/resumenData';
import CustomButton from '../Button/CustomButton';
import './Header.css';
const Header = ( props ) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky='top' className='header'>
        {/* Home */}
        <Nav.Link as={NavLink} to='/' className='header_navlink'>
          <Navbar.Brand className='header_home'>
              <HomeRounded/>
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav className='header_left'>
              {/* Resumen Link */}
              <Nav.Link 
                as ={ NavLink} 
                to='/' 
                className={pathName == '/' ? "header_link_active" : "header_link"}>
                  Resumen
              </Nav.Link>

              {/* Portafolio Link */}
              <Nav.Link 
                as ={ NavLink} 
                to='/portafolio' 
                className={pathName == '/portafolio' ? "header_link_active" : "header_link"}>
                  Portafolio
              </Nav.Link>
            </Nav>

            <div className='header_right'>
              {Object.keys(resumenData.socials).map(key => (
                <a href={resumenData.socials[key].Link} target="_blank">
                  {resumenData.socials[key].icon}
                </a>
              ))}
              <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
            </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(Header);
