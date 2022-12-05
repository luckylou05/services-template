import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
// import logo from './logo.svg';

const NavBar = () => {
	return (
		<Navbar
			as='nav'
			fixed='top'
			collapseOnSelect
			expand='md'
			bg='dark'
			variant='dark'
			className='px-3'>
			<Navbar.Brand href='#home'>COMPANY NAME</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='me-auto'>
					<Nav.Link href='#features'>About Us</Nav.Link>
					<Nav.Link href='#pricing'>Why Us</Nav.Link>
					<NavDropdown
						title='Services'
						id='collasible-nav-dropdown'>
						<NavDropdown.Item href='#action/3.1'>Service #1</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>Service #2</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>Service #3</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='#action/3.4'>Pricing</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.4'>Promotions</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href='#deets'>Gallery</Nav.Link>
					<Nav.Link
						eventKey={2}
						href='#memes'>
						Contact Us
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
