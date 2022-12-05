import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import './About.css';
import aboutImage from '../../assets/images/about-image1.png';

const About = () => {
	return (
		<Container
			as='section'
			className='mx-auto'>
			<Row className='pb-5 mb-5 bg-dark text-light about-us'>
				<Col>
					<h1 className='mt-5'>About Us</h1>
					<hr className='mx-auto w-25 mb-5' />

					<Figure className='mx-0 w-50'>
						<Figure.Image
							// width={171}
							// height={180}
							alt=''
							src={aboutImage}
							className='w-75'
						/>
						<Figure.Caption className=''>
							<br />
							<em>Nulla vitae elit libero, a pharetra augue mollis interdum.</em>
						</Figure.Caption>
					</Figure>
					<p className='mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<p className='mb-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
