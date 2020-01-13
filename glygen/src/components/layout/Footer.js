import React from 'react';
import './Header.css';
import './Footer.css';
import logoFooter from '../images/glygen_logos/glygen-logoW-top.svg';
import uga from '../images/univ_logos/logo-uga.png';
import gwu from '../images/univ_logos/logo-gwu.png';
import { Navbar, Col, Nav, Image, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => (
	<React.Fragment className='fixed-bottom'>
		<Navbar sticky='bottom' className='gg-bg-blue text-center footer'>
			<Container>
				<Row>
					<Col sm={12} md={6} xl={2}>
						<Navbar.Brand href='#home'>
							<img
								href='#home'
								src={logoFooter}
								alt='Glygen'
								className='justify-content-center'
							/>
						</Navbar.Brand>
					</Col>
					<Col sm={12} md={6} xl={4}>
						<Nav className='justify-content-center'>
							<Nav.Item>
								<Nav.Link to='/license'>License</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link to='/privacy_policy'>Privacy&nbsp;Policy</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='disclaimer.js'>Disclaimer</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href='contact'>Contact&nbsp;Us</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={12} md={6} xl={4}>
						<Navbar.Text>
							Funded by{' '}
							<a
								href='https://commonfund.nih.gov/glycoscience'
								target='_blank'
								rel='noopener noreferrer'>
								NIH Glycoscience Common Fund
							</a>
						</Navbar.Text>
						<br />
						<Navbar.Text>
							Grant #{' '}
							<a
								href='https://projectreporter.nih.gov/project_info_details.cfm?aid=9391499&icde=0'
								target='_blank'
								rel='noopener noreferrer'>
								1U01GM125267&nbsp;-&nbsp;01
							</a>
						</Navbar.Text>
					</Col>
					<Col sm={12} md={6} xl={2}>
						<Link to='https://www.ccrc.uga.edu/'>
							<Image src={uga} className='univ-logo' />
						</Link>
						<a href='https://smhs.gwu.edu/'>
							<Image src={gwu} className='univ-logo' />
						</a>
					</Col>
				</Row>
			</Container>
		</Navbar>
	</React.Fragment>
);
export default Footer;
