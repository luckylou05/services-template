import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import bCard from '../../../assets/images/services-section.png';

const ServicesSection = () => {
	return (
		<Container className='home-card-group'>
			<h1 className='mt-5 shadow-text-nav'>Services</h1>
			<hr className='mx-auto w-25 border-color2 opacity-75' />
			<CardGroup className='my-5 text-center'>
				<Card className=''>
					<Card.Img
						variant='top shadow-lg p-1'
						src={bCard}
					/>
					<Card.Body>
						<Card.Title>Service #1</Card.Title>
						<Card.Text>Explain service #1.</Card.Text>
					</Card.Body>
					<Card.Footer className='d-grid'>
						<Button
							variant=''
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className=''>
					<Card.Img
						variant='top shadow-lg p-1'
						src={bCard}
					/>
					<Card.Body>
						<Card.Title>Service #2</Card.Title>
						<Card.Text>Explain service #2.</Card.Text>
					</Card.Body>
					<Card.Footer className='d-grid'>
						<Button
							variant=''
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className=''>
					<Card.Img
						variant='top shadow-lg p-1'
						src={bCard}
					/>
					<Card.Body>
						<Card.Title>Service #3</Card.Title>
						<Card.Text>Explain service #3.</Card.Text>
					</Card.Body>
					<Card.Footer className='d-grid'>
						<Button
							variant=''
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>
			</CardGroup>

			{/*,,'===D=I=V=I=D=I=N=G===L=I=N=E=== === ===*/}

			<CardGroup className='my-5'>
				<Card className=''>
					<Card.Img
						variant='top shadow-lg p-1'
						src={bCard}
					/>
					<Card.Body>
						<Card.Title>Service #4</Card.Title>
						<Card.Text>Explain service #4.</Card.Text>
					</Card.Body>
					<Card.Footer className='d-grid'>
						<Button
							variant=''
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className=''>
					<Card.Img
						variant='top shadow-lg p-1'
						src={bCard}
					/>
					<Card.Body>
						<Card.Title>Service #5</Card.Title>
						<Card.Text>Explain service #5.</Card.Text>
					</Card.Body>
					<Card.Footer className='d-grid'>
						<Button
							variant=''
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>

				<Card className=''>
					<Card.Img
						variant='top shadow-lg p-1'
						src={bCard}
					/>
					<Card.Body>
						<Card.Title>Service #6</Card.Title>
						<Card.Text>Explain service #6.</Card.Text>
					</Card.Body>
					<Card.Footer className='d-grid'>
						<Button
							variant=''
							className=''>
							More Info...
						</Button>{' '}
					</Card.Footer>
				</Card>
			</CardGroup>
		</Container>
	);
};

export default ServicesSection;
