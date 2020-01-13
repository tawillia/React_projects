import React from 'react';
import './Header.css';
import './Footer.css';
import logoFooter from '../images/glygen_logos/glygen-logoW-top.svg';
import uga from '../images/univ_logos/logo-uga.png';
import gwu from '../images/univ_logos/logo-gwu.png';
import { Navbar, Col, Nav, Image, Container, Row } from 'react-bootstrap';
import '../../App.css';

const Footer = () => (
	<React.Fragment className='fixed-bottom'>
		<Navbar
			sticky='bottom'
			className='gg-bg-blue text-center footer'
			expand='lg'>
			<Container>
				<Row>
					<Col sm={12} md={6} xl={2}>
						<Navbar.Brand href='#home'>
							<img
								href='#home'
								src={logoFooter}
								alt='Glygen'
								className='d-inline-block align-top text-center'
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
						<Nav inline className='justify-content-center'>
							Funded by
							<span>
								<Nav.Item>
									<Nav.Link
										href='https://commonfund.nih.gov/glycoscience'
										target='_blank'>
										NIH Glycoscience Common Fund
									</Nav.Link>
								</Nav.Item>
							</span>
						</Nav>

						<Nav inline className='justify-content-center'>
							Grant #
							<span>
								<Nav.Item>
									<Nav.Link
										href='https://projectreporter.nih.gov/project_info_details.cfm?aid=9391499&icde=0'
										target='_blank'>
										1U01GM125267&nbsp;-&nbsp;01
									</Nav.Link>
								</Nav.Item>
							</span>
						</Nav>
					</Col>
					<Col sm={12} md={6} xl={2}>
						<Image src={uga} />
						<Image src={gwu} />
					</Col>
				</Row>
			</Container>
		</Navbar>
	</React.Fragment>
);
export default Footer;
