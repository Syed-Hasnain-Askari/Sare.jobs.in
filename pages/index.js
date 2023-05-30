import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import FooterTwo from '../components/Layouts/Footer';
import TeamContent from '../components/Team/TeamContent';
import Hire from '../components/Hire/Hire';
function Index() {
	return (
		<>
			<Navbar />

			<MainBanner
				heading='Start your Career Dream with Sare'
				image='/images/tesm-image-ic.png'
			/>

			<TeamContent />

			<Hire />

			<FooterTwo />
		</>
	);
}
export default Index;
