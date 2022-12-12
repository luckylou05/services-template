import React from 'react';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import aboutImage from '../../assets/images/about-image1.png';

const About = () => {
	return (
		<Container
			as='section'
			fluid={true}
			className='px-5 text-center'>
			<Stack>
				<div className=''>
					<h1 className='mt-5 text-center shadow-text-black'>About Us</h1>
				</div>
				<hr className='mx-auto w-25 mb-5 border-color2 opacity-75' />
			</Stack>
			{/*===FIXME:► should stack as row and hides vr before md◄===*/}
			<Row
				direction='horizontal'
				className='text-center mb-5 w-100 mx-auto'>
				<Col className=''>
					<h2 className='text-decoration-underline py-5 shadow-text-black'>Mission Statement:</h2>
					<p
						className='col-md-6 offset-md-3 lh-lg'
						style={{ textAlign: 'justify' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</Col>
				<Col className=''>
					<h2 className='text-decoration-underline py-5 shadow-text-black'>Vision Statement:</h2>
					<p
						className='col-md-6 offset-md-3 lh-lg'
						style={{ textAlign: 'justify' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</Col>
			</Row>
			<hr className='w-50 mx-auto' />
			<Stack className='py-5 my-5 bg-dark text-light about-us text-center'>
				<div>
					<Figure className='mx-0 w-75'>
						<Figure.Image
							alt=''
							src={aboutImage}
							className='w-75'
						/>
						<Figure.Caption className='text-color5'>
							<br />
							<em>Nulla vitae elit libero, a pharetra augue mollis interdum.</em>
						</Figure.Caption>
					</Figure>
					<p
						className='mb-5'
						style={{ textAlign: 'justify' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<p
						className='mb-5'
						style={{ textAlign: 'justify' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</Stack>
		</Container>
	);
};

export default About;
