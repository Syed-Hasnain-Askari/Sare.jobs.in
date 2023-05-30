import React from 'react';
import AllCareers from '../components/Careers/AllCareers';
import Layout from '../components/Layouts/Layout';
import MainBanner from '../components/Home/MainBanner';
function CareersPage() {
	return (
		<>
			<Layout>
				<MainBanner
					heading='Find Your Next 
					Opportunity, 
					Build Your Career'
					image='/images/jobs-image-ic.png'
				/>
				<AllCareers />
			</Layout>
		</>
	);
}

export default CareersPage;
