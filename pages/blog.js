import React, { Component } from 'react';
import MainBanner from '../components/Home/MainBanner';
import Layout from '../components/Layouts/Layout';
class Blog extends Component {
	render() {
		return (
			<Layout>
				<MainBanner
					heading='Blog'
					image='/images/blogs-image-ic.png'
				/>
				<section style={{ height: '650px' }}>
					<div
						className='row'
						style={{ paddingTop: '200px' }}>
						<div className='ml-main-banner-image d-flex justify-content-center'>
							<img
								src='/images/comming_soon_ic.png'
								alt='image'
							/>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}

export default Blog;
