import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactForm from './components/ContactForm';
import './Contact.css';

const Contact = () => {
	/*=== google map iframe embedded from google maps ===*/
	const iGoogleMap = (
		<iframe
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111597.85460064842!2d-141.94290739151188!3d64.08472628842662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5149fae514bf64b7%3A0x1a987994b8764694!2sChicken%2C%20AK!5e0!3m2!1sen!2sus!4v1670188187346!5m2!1sen!2sus'
			title='chickenMap'
			width='100%'
			height='100%'
			style={{ border: '0' }}
			allowFullScreen=''
			loading='lazy'
			referrerPolicy='no-referrer-when-downgrade'></iframe>
	);

	return (
		<Container
			as='section'
			className='mb-5 contact-us'>
			<Row className='align-items-center'>
				<Col
					className='mt-5'
					size={12}
					lg={12}>
					<h1>Contact Us</h1>
					<hr className='mx-auto w-25' />
				</Col>
			</Row>

			<Row className='bg-dark mb-5 contact-address mx-auto'>
				<Col
					as={'address'}
					className='mt-3'>
					<h4>Company Name</h4>

					<p>Address Here</p>

					<p>City, TX 55555</p>

					<a
						href='mailto:@gmail.com'
						className='mx-auto'>
						your-email@email.com
					</a>
					<br />
					<a
						href='tel:000'
						className='mx-auto'>
						555-555-5555
					</a>
				</Col>
			</Row>
			<ContactForm />
			<Row>
				<Col
					className='ihydro-map'
					style={{ height: '500px' }}>
					{iGoogleMap}
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
