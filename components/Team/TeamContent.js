import React, { Component } from 'react';
import Link from 'next/link';

const data = [
	{
		title: 'Coprate Function',
		desc: 'The Corporate Functions Team anticipates and addresses organizational problems to ensure that we continue growing and operating efficiently. They provide solutions by combining the resources of Human Resources,Legal Policy, Finance, and Support.',
	},
	{
		title: 'R&D',
		desc: 'The Research and Development Team drives our business forward by refining and improving our current products to meet the demands of global users, as well as exploring entirely new innovations for the future.',
	},
	{
		title: 'Product',
		desc: 'Focusing on innovation and direction, the Product Team investigates, identifies, and guides the success of our world-class platforms. They drive product development and make an impact by analyzing the market, determining the vision and strategy, and collaborating with other teams.',
	},
	{
		title: 'Design',
		desc: 'With incredible creativity and artistic skill, the Design Team shapes the visual representation of our products and businesses. They create unique designs that are not just visually appealing, but also express the aesthetic of our brand.',
	},
	{
		title: 'Marketing',
		desc: 'Combining creativity and market research, the Marketing Team captivates consumers and business partners alike by leading our branding, advertising, communications, and media strategies around the world. They strive to elevate the visibility of our brand globally.',
	},
	{
		title: 'Operations',
		desc: 'Utilizing strong analytical abilities, the Operations Team ensures that the quality of our products meets the expectations and needs of our users. They are passionate about using our products to empower and bring joy to our global community.',
	},
	{
		title: 'Sales',
		desc: 'Our Sales Team does more than just generate revenue. By building strong relationships and providing a positive customer experience, they create valuable connections between our products/services and our customers.',
	},
];

class TeamContent extends Component {
	render() {
		return (
			<section className='team-area ptb-110'>
				<div className='container'>
					<div className='row pb-70'>
						<div className='d-flex justify-content-center align-content-center'>
							<h1>Our Team</h1>
						</div>
					</div>
					<div className='row'>
						{data.map((item, index) => {
							return (
								<div className='col-lg-4 col-md-4 col-sm-12 mb-4'>
									<div className='row d-flex justify-content-center m-1'>
										<div
											key={index}
											className='card'
											style={{ width: '380px', height: '250px', borderRadius: '20px', overflow: 'hidden' }}>
											<div className='card-body py-4'>
												<h4 className='card-title text-center'>{item.title}</h4>
												<p
													className='card-text'
													style={{ whiteSpace: 'pre-wrap' }}>
													{item.desc}
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default TeamContent;
