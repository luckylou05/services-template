import React from 'react';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';

import { NavLink } from 'react-router-dom';
// import logo from './logo.svg';

const NavBar = () => {
	return (
		<Navbar
			as='nav'
			fixed='top'
			collapseOnSelect
			expand='md'
			bg='kulay2'
			variant='dark'
			className='px-3 my-nav-bar shadow-lg'>
			<Navbar.Brand
				as={NavLink}
				to='/'
				className='text-kulay5'>
				<span>COMPANY NAME</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='me-auto'>
					<Nav.Link
						as={NavLink}
						to='/'
						className=''>
						<span>Home</span>
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to='about'
						className=''>
						<span>About Us</span>
					</Nav.Link>
					<NavDropdown
						title='Services'
						id='collasible-nav-dropdown'
						className=''>
						<NavDropdown.Item
							as={NavLink}
							to='services'
							className=''>
							<span>Service #1</span>
						</NavDropdown.Item>
						<NavDropdown.Item
							as={NavLink}
							to='services2'
							className=''>
							<span>Service #2</span>
						</NavDropdown.Item>
						<NavDropdown.Item
							as={NavLink}
							to='services'
							className=''>
							<span>Service #3</span>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							as={NavLink}
							to='services'
							className=''>
							<span>Pricing</span>
						</NavDropdown.Item>
						<NavDropdown.Item
							as={NavLink}
							to='services'
							className=''>
							<span>Promotions</span>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link
						as={NavLink}
						to='reviews'>
						<span>Reviews</span>
					</Nav.Link>
					<Nav.Link
						eventKey={2}
						as={NavLink}
						to='contact'>
						<span>Contact Us</span>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
