import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ children, href, activeClassName, ...rest }) => {
	const { pathname } = useRouter();
	const isActive = pathname === href || pathname.startsWith(`${href}/`);

	const child = Children.only(children);

	let className = child.props.className || '';
	if (isActive && activeClassName) {
		className = `${className} ${activeClassName}`.trim();
	}

	return (
		<Link
			href={href}
			{...rest}>
			{React.cloneElement(child, { className })}
		</Link>
	);
};

export default ActiveLink;
