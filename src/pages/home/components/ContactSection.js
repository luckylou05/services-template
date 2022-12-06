import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import ContactForm from '../../../utils/ContactForm';
import imageImg from '../../../assets/images/services.png';

const ContactSection = () => {
	return (
		<Container
			as='section'
			className='mb-5 home-contact-section'>
			<Row className='mt-5'>
				<Col className='display-6 col-12 col-md-6 text-center'>
					<h2 className='shadow-text-itim'>Request Your Service Today!</h2>
					<p className='lead'>Fill the form below and we'll contact you in no time!</p>
					<hr className='mx-auto w-50' />
					<ContactForm />
				</Col>
				<Col className='text-center mt-5'>
					<Figure className=''>
						<Figure.Image
							width={171}
							height={180}
							alt='171x180'
							src={imageImg}
							className='rounded-circle shadow-lg'
						/>
						<Figure.Caption className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption>
					</Figure>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactSection;
