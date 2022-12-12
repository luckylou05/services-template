import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import aboutSectionImage from '../../../assets/images/about-image1.png';

const AboutSection = () => {
	return (
		<Container
			as='section'
			// fluid={true}
			className='text-center mt-5 shadow-lg about-section'>
			<Row className='text-light'>
				<Col className=''>
					<h1 className='pt-5 header'>
						<span className='shadow-text-black display-3'>About Us</span>
					</h1>
					<hr className='mx-auto w-25 border-color2 opacity-75' />
				</Col>
			</Row>

			<Row className='pt-5 w-75 mx-auto'>
				<Col>
					<Figure className=''>
						<Figure.Image
							alt=''
							src={aboutSectionImage}
							className='shadow-sky'
						/>
						<Figure.Caption className=''>
							<br />
							<em className='text-color5 fst-italic'>Nulla vitae elit libero, a pharetra augue mollis interdum.</em>
						</Figure.Caption>
					</Figure>

					<p
						className='mb-5 text-color4 lh-lg lead'
						style={{ textAlign: 'justify' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum...
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutSection;
