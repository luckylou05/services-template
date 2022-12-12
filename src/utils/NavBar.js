import React from 'react';
// import { useState } from 'react';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';

import { NavLink } from 'react-router-dom';
// import logo from '../logo.svg';

const NavBar = () => {
	return (
		<Navbar
			as='nav'
			fixed='top'
			collapseOnSelect
			expand='md'
			bg='color1'
			// variant='light'
			className='px-3 my-nav-bar shadow-lg'>
			<Navbar.Brand
				as={NavLink}
				to='/'
				reloadDocument='true'
				className='text-color3 fw-semibold fs-5'>
				<span className='shadow-text-black'>BUSINESS NAME</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse
				id='responsive-navbar-nav'
				className='fw-bolder'>
				<Nav className='me-auto'>
					<Nav.Link
						as={NavLink}
						to='/'
						reloadDocument='true'
						className=''>
						<span className='fs-4 shadow-text-nav'>Home</span>
					</Nav.Link>
					<Nav.Link
						as={NavLink}
						to='about'
						reloadDocument='true'
						className='fs-4 shadow-text-nav'>
						<span>About Us</span>
					</Nav.Link>
					<NavDropdown
						title='Services'
						id='collasible-nav-dropdown'
						className='fs-4 shadow-text-nav'>
						<NavDropdown.Item
							as={NavLink}
							to='services'
							reloadDocument='true'
							className='fs-4 shadow-text-nav'>
							<span>Service #1</span>
						</NavDropdown.Item>
						<NavDropdown.Item
							as={NavLink}
							to='services2'
							reloadDocument='true'
							className='fs-4 shadow-text-nav'>
							<span>Service #2</span>
						</NavDropdown.Item>
						<NavDropdown.Item
							as={NavLink}
							to='reviews'
							reloadDocument='true'
							className='fs-4 shadow-text-nav'>
							<span>FAQ</span>
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item
							as={NavLink}
							to='reviews'
							reloadDocument='true'
							className='fs-4 shadow-text-nav'>
							<span>Reviews</span>
						</NavDropdown.Item>
						<NavDropdown.Item
							as={NavLink}
							to='services'
							reloadDocument='true'
							className='fs-4 shadow-text-nav'>
							<span>Promotions</span>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link
						as={NavLink}
						to='faq'
						reloadDocument='true'>
						<span className='fs-4 shadow-text-nav'>FAQ</span>
					</Nav.Link>
					<Nav.Link
						eventKey={2}
						as={NavLink}
						to='contact'
						reloadDocument='true'>
						<span className='fs-4 shadow-text-nav'>Contact Us</span>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
