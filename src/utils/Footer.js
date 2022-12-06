import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

// import logo from './logo.svg';

const Footer = () => {
	return (
		<Container
			as='footer'
			fluid={true}
			className='bg-kulay2 text-kulay1 p-5'>
			<Row>
				<Col>
					<Nav
						defaultActiveKey='/home'
						className='flex-column'>
						<Nav.Link
							as={NavLink}
							to='/'>
							<span>Home</span>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='about'>
							<span>About Us</span>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='services'>
							<span>Services</span>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='services'>
							<span>Pricing</span>
						</Nav.Link>
					</Nav>
				</Col>
				<Col>
					<Nav
						defaultActiveKey='/'
						className='flex-column'>
						<Nav.Link
							as={NavLink}
							to='contact'>
							<span>Promotions</span>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='contact'>
							<span>Social Media Links</span>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='/reviews'>
							<span>Reviews</span>
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='/'>
							<span>License Info</span>
						</Nav.Link>
					</Nav>
				</Col>
				<Col className='my-auto text-kulay1'>
					<Nav.Link
						as={NavLink}
						to='/'>
						<h4 className='pb-3 text-kulay3'>Company Name Services</h4>
					</Nav.Link>
					<p className='pb-1'>Copyright ©️ 2022</p>
					<p>All Rights Reserved</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
