import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import ContactForm from '../../../utils/ContactForm';
// import logo from '../../../../src/logo.svg';
import logo from '../../../assets/images/services.png';

const ContactSection = () => {
	return (
		<Container
			as='section'
			className='mb-5 home-contact-section'>
			<Row className='mt-5'>
				<Col
					xs={12}
					lg={6}
					className='display-6 text-center'>
					<h2 className='shadow-text-black'>Request Your Service Today!</h2>
					<p className='lead text-color5'>Fill the form below and we'll contact you in no time!</p>
					<hr className='mx-auto w-50 border-color2 opacity-75' />
					<ContactForm />
				</Col>
				<Col className='text-center mt-5'>
					<Figure className=''>
						<Figure.Image
							style={{ width: '300px', height: '300px' }}
							alt='logo'
							src={logo}
							className='rounded-circle shadow-lg big-logo placeholder-wave'
						/>
						<Figure.Caption className='text-color5 mt-3'>
							<em className='fs-3'>Since 1969</em>
						</Figure.Caption>
					</Figure>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactSection;
