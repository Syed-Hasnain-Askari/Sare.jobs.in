import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import Footer from '../components/Layouts/Footer';
export default function Location() {
	return (
		<>
			<Navbar />

			<MainBanner
				heading='We have 
                employees in India,
                globally and more 
                cities upcoming...'
				para='SARE team has 2 research and development centers around the india. Our apps operate in 120 markets and 35
                languages.'
				image='/images/location-image-ic.png'
			/>
			<section style={{ height: '650px', backgroundImage: 'url(/images/map.png)' }}>
				<div className='container'>
					<div className='row'>
						<div
							className='ml-main-banner-image d-flex justify-content-center'
							style={{ paddingTop: '200px' }}>
							<img
								src='/images/comming_soon_ic.png'
								alt='image'
							/>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
