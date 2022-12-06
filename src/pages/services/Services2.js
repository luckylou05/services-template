// import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services2 = () => {
	// const [showTab, setShowTab] = useState(false);

	// let showMe = document.querySelectorAll('.show-me-tab');
	// showMe.addEventListener(click, () => {
	// 	'';
	// });

	return (
		<Container
			as='section'
			style={{ height: '100vh' }}
			// fluid={true}
			className='mt-5 text-start'>
			<Tab.Container
				id='services-tabs'
				defaultActiveKey='first'
				className='mt-5'>
				<Row>
					<Col sm={3}>
						<Nav
							variant='pills'
							className='flex-column'>
							<Nav.Item>
								<Nav.Link eventKey='first'>Service #1</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey='second'>Service #2</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Tab.Pane eventKey='first'>
								<p className=''>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
									officia deserunt mollit anim id est laborum.
								</p>
							</Tab.Pane>
							<Tab.Pane eventKey='second'>
								<p className=''>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
									officia deserunt mollit anim id est laborum.
								</p>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Container>
	);
};

export default Services2;
