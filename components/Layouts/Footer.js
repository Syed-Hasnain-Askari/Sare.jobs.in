import React from 'react';
import Link from 'next/link';
import ActiveLink from '../../utils/ActiveLink';
function Footer() {
	let currentYear = new Date().getFullYear();
	return (
		<footer className='footer-wrap-area pt-100'>
			<div className='container'>
				<div className='row d-flex justify-content-between'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<div className='logo position-relative'>
								<a href='/'>
									<img
										src='/images/sare_logo_white_ic.png'
										alt='logo'
									/>
									<span className='text-white fs-5 fw-bold position-absolute'>Sare Team Pvt. Ltd.</span>
								</a>
								<p>
									SARE aims to create products, revolutions or experiences that make an impact in people’s lives that empower
									a better culture & community that is driven by technology.
								</p>
							</div>
							<ul className='social'>
								<li>
									<a
										href='https://www.facebook.com/Team.Sare'
										target='_blank'>
										<i className='flaticon-facebook-letter-logo'></i>
									</a>
								</li>
								<li>
									<a
										href='https://twitter.com/SareTeam_'
										target='_blank'>
										<i className='flaticon-twitter'></i>
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/sare.team/'
										target='_blank'>
										<i className='flaticon-instagram-logo'></i>
									</a>
								</li>
								<li>
									<a
										href='https://www.linkedin.com/company/sare-team-private-limited/'
										target='_blank'>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='single-footer-widget'>
							<h3>Quick Links</h3>
							<ul className='quick-links-list'>
								<li>
									<ActiveLink
										href='/'
										passHref
										activeClassName='active'>
										<a className='footer-link'>Teams</a>
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										activeClassName='active'
										href='/location'
										passHref>
										<a className='footer-link'>Locations</a>
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										activeClassName='active'
										href='/blog'
										passHref>
										<a className='footer-link'>Blog</a>
									</ActiveLink>
								</li>
								<li>
									<ActiveLink
										activeClassName='active'
										href='/careers'
										passHref>
										<a className='footer-link'>Jobs</a>
									</ActiveLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='copyright-area'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6 col-md-6 col-sm-6'>
							<p>Copyright &copy;{currentYear} SARE Team. All Rights Reserved.</p>
						</div>

						<div className='col-lg-6 col-md-6 col-sm-6'>
							<ul>
								<li>
									<Link href='/privacy-policy'>
										<a>Privacy Policy</a>
									</Link>
								</li>
								<li>
									<Link href='/terms-conditions'>
										<a>Terms & Conditions</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='circle-map'>
				<img
					src='/images/circle-map.png'
					alt='image'
				/>
			</div>

			<div className='lines'>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>

			<div className='footer-wrap-shape-1'>
				<img
					src='/images/home-six/footer/shape-1.png'
					alt='image'
				/>
			</div>
			<div className='footer-wrap-shape-2'>
				<img
					src='/images/home-six/footer/shape-2.png'
					alt='image'
				/>
			</div>
			<div className='footer-wrap-shape-3'>
				<img
					src='/images/home-six/footer/shape-3.png'
					alt='image'
				/>
			</div>
		</footer>
	);
}
export default Footer;
