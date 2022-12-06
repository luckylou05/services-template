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
			fluid={true}
			className='text-center gx-0 mt-5 bg-kulay2 shadow-lg'>
			<Row className='text-light about-section'>
				<Col className=''>
					<h1 className='pt-5 text-kulay5 header'>
						<span className='shadow-text-itim display-3'>About</span>
					</h1>
					<hr className='w-25 mx-auto border-kulay1 opacity-50' />
				</Col>
			</Row>

			<Row className='bg-kulay2 pt-5'>
				<Col>
					<Figure className='w-50'>
						<Figure.Image
							// width={171}
							// height={180}
							alt=''
							src={aboutSectionImage}
							className='w-75 shadow-sky rounded-1'
						/>
						<Figure.Caption className=''>
							<br />
							<em className='text-kulay5 fst-italic'>Nulla vitae elit libero, a pharetra augue mollis interdum.</em>
						</Figure.Caption>
					</Figure>

					<p className='mb-5 text-kulay1 lh-lg px-5 lead'>
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
