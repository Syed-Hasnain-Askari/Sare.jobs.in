import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import Footer from '../components/Layouts/Footer';
export default function Jobs() {
	return (
		<>
			<Navbar />

			<MainBanner
				heading='Find Your Next 
                Opportunity, 
                Build Your Career'
				image='/images/jobs-image-ic.png'
			/>
			<section style={{ height: '300px', backgroundImage: 'url(/images/map.png)' }}>
				<div className='container'>
					<div className='row justify-content-center align-content-center'>
						<div className='col-lg-4 col-md-4 col-sm-12'>
							<div className='ml-main-banner-image mt-5'>
								<img
									src='/images/comming_soon_ic.png'
									alt='image'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
