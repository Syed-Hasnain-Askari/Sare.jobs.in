import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children, isBlack }) {
	return (
		<div>
			<Navbar isBlack={isBlack} />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
