import React from 'react';
import { Link } from 'react-router-dom';

// styles and assets
import '../styles/navbar.scss';
import navLogo from '../assets/jhLogo.svg';

export default function Navbar(props) {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark nav-bg'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img src={navLogo} alt='jhLogo' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarContent'
					aria-controls='navbarContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								All Apps
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/contact'>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}