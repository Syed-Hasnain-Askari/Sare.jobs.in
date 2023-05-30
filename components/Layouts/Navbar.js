import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Modal from '../Modal/Modal';

const MySwal = withReactContent(Swal);
class Navbar extends Component {
	// Search Form
	state = {
		searchForm: false,
	};
	handleSearchForm = () => {
		this.setState((prevState) => {
			return {
				searchForm: !prevState.searchForm,
			};
		});
	};

	// Navbar
	_isMounted = false;
	state = {
		display: false,
		collapsed: true,
	};
	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	componentDidMount() {
		let elementId = document.getElementById('navbar');
		document.addEventListener('scroll', () => {
			if (window.scrollY > 170) {
				elementId.classList.add('is-sticky');
			} else {
				elementId.classList.remove('is-sticky');
			}
		});
	}
	componentWillUnmount() {
		this._isMounted = false;
	}
	openSignInModal = () => {
		MySwal.fire({
			html: <Modal />,
			showCloseButton: false,
			showConfirmButton: false,
			focusConfirm: false,
			allowOutsideClick: false,
			allowEscapeKey: false,
			imageUrl: '/images/comming_soon_ic.png',
		});
	};

	render() {
		const { collapsed } = this.state;
		const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
		const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
		return (
			<>
				<div
					id='navbar'
					className='navbar-area navbar-area-with-position-relative'>
					<div className='main-nav'>
						<div className='container-fluid'>
							<nav className='navbar navbar-expand-md navbar-light'>
								<Link href='/'>
									<a className='navbar-brand'>
										<img
											src='/images/sare-logo-ic.png'
											alt='logo'
										/>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='60'
											height='32'
											fill='#000'
											class='main-logo'>
											<g fill='[object Object]'>
												<path
													data-name='Path 1'
													d='M15.947 17.989v2.545A3.576 3.576 0 0 1 15 23.208a3.822 3.822 0 0 1-2.764.922h-4.38a4.032 4.032 0 0 1-2.881-.915A3.5 3.5 0 0 1 4 20.534v-1.621a.624.624 0 0 1 .624-.624H6.6a.624.624 0 0 1 .624.624v1.027c0 .843.238 1.088 1.066 1.088h3.4c.817 0 1.039-.235 1.039-1.088v-1.332c0-.659-.084-.836-.971-1.207L7.3 15.464c-2.161-.959-3.062-1.722-3.062-3.942V9.644a3.618 3.618 0 0 1 .973-2.738A3.9 3.9 0 0 1 8.031 6H11.8c2.592 0 3.906 1.227 3.906 3.644v1.4a.624.624 0 0 1-.624.624h-1.969a.624.624 0 0 1-.624-.624v-.806c0-.859-.264-1.138-1.089-1.138H8.571a1.3 1.3 0 0 0-.892.216 1.5 1.5 0 0 0-.219.969v.876c0 .648.079.822.908 1.186l4.514 1.93h.011c1.901.861 3.054 1.537 3.054 3.712Z'></path>
												<path
													data-name='Path 2'
													d='M29.785 23.876a.619.619 0 0 1-.5.249h-2.09a.624.624 0 0 1-.6-.461l-3.181-11.725-2.405 8.961h3.085a.624.624 0 0 1 .6.457l.543 1.974a.622.622 0 0 1-.105.543.641.641 0 0 1-.5.268h-7.1a.624.624 0 0 1-.6-.8l4.836-16.89a.627.627 0 0 1 .6-.452h2.093a.626.626 0 0 1 .6.452l4.827 16.882a.624.624 0 0 1-.1.542Z'></path>
												<path
													data-name='Path 3'
													d='m39.598 17.677 2.921 5.538a.624.624 0 0 1-.55.915h-2.278a.627.627 0 0 1-.554-.335l-3.155-6.038h-.032a.624.624 0 0 1-.624-.624v-1.855a.624.624 0 0 1 .624-.624h2.175c.978 0 1.278-.321 1.278-1.372v-2.8c0-1.039-.31-1.374-1.278-1.374h-3.857v14.4a.624.624 0 0 1-.624.624h-1.977a.624.624 0 0 1-.624-.624V6.624A.624.624 0 0 1 31.664 6h6.872c3.365 0 4.071 2.086 4.071 3.835v4.088c0 2.149-1.036 3.43-3.009 3.754Z'></path>
												<path
													data-name='Path 4'
													d='m55.159 21.738-.261 1.856a.624.624 0 0 1-.617.536h-8.873a.624.624 0 0 1-.624-.624V6.624A.624.624 0 0 1 45.408 6h9.087a.626.626 0 0 1 .617.712l-.261 1.854a.624.624 0 0 1-.619.536h-6.227v4.652h4.143a.622.622 0 0 1 .617.718l-.284 1.856a.627.627 0 0 1-.617.526h-3.856v4.171h6.537a.62.62 0 0 1 .617.7Z'></path>
											</g>
										</svg>
									</a>
								</Link>

								<button
									onClick={this.toggleNavbar}
									className={classTwo}
									type='button'
									data-toggle='collapse'
									data-target='#navbarSupportedContent'
									aria-controls='navbarSupportedContent'
									aria-expanded='false'
									aria-label='Toggle navigation'>
									<span className='icon-bar top-bar'></span>
									<span className='icon-bar middle-bar'></span>
									<span className='icon-bar bottom-bar'></span>
								</button>

								<div
									className={classOne}
									id='navbarSupportedContent'>
									<ul className='navbar-nav'>
										<li className='nav-item'>
											<Link
												href='/'
												activeClassName='active'>
												<a className='nav-link'>Teams</a>
											</Link>
										</li>

										<li className='nav-item'>
											<Link
												href='/location'
												activeClassName='active'>
												<a className='nav-link'>Locations</a>
											</Link>
										</li>

										<li className='nav-item'>
											<Link
												href='/blog'
												activeClassName='active'>
												<a className='nav-link'>Blog</a>
											</Link>
										</li>

										<li className='nav-item'>
											<Link
												href='/careers'
												activeClassName='active'>
												<a className='nav-link'>Jobs</a>
											</Link>
										</li>
									</ul>
									<div
										className='others-options'
										onClick={this.openSignInModal}>
										<Link href='#'>
											<a className='btn btn-primary'>Sign In</a>
										</Link>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Navbar;
