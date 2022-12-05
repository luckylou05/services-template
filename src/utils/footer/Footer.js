import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './Footer.css';
// import logo from './logo.svg';

const Footer = () => {
	return (
		<Container
			as='footer'
			fluid={true}
			className='bg-dark text-light p-5'>
			<Row>
				<Col>
					<Nav
						defaultActiveKey='/home'
						className='flex-column'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link eventKey='link-1'>About Us</Nav.Link>
						<Nav.Link eventKey='link-2'>Services</Nav.Link>
						<Nav.Link
						// eventKey='disabled'
						// disabled
						>
							Prices
						</Nav.Link>
					</Nav>
				</Col>
				<Col>
					<Nav
						defaultActiveKey='/home'
						className='flex-column'>
						<Nav.Link href='/home'>Promotions</Nav.Link>
						<Nav.Link eventKey='link-1'>Social Media Links</Nav.Link>
						<Nav.Link eventKey='link-2'>Apply Now</Nav.Link>
						<Nav.Link
						// eventKey='disabled'
						// disabled
						>
							License Info
						</Nav.Link>
					</Nav>
				</Col>
				<Col className='my-auto'>
					<h4 className='pb-3'>Company Name Services</h4>
					<p className='pb-1'>Copyright ©️ 2022</p>
					<p>All Rights Reserved</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
