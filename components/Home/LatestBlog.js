import React, { useState } from 'react';
import Link from 'next/link';
import { getData } from '../../requests';
import { format } from 'date-fns';
export default function LatestBlog() {
	const { data, error } = getData(process.env.NEXT_PUBLIC_API_URL.concat(process.env.NEXT_PUBLIC_BLOGS));
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	console.log(data);
	return (
		<>
			<div className='ai-blog-area pt-100 pb-70'>
				<div className='container'>
					<div className='section-title with-underline-text'>
						<h2>
							Latest Blog and News Don’t Miss Any <b>Updates</b> and News!
						</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. A ac, ut eget pellentesque nulla viverr.</p>
					</div>

					<div className='row justify-content-center'>
						{data &&
							data.data.map((item, index) => {
								return (
									<div className='col-lg-4 col-md-6'>
										<div className='ai-blog-card'>
											<div className='entry-thumbnail'>
												<Link href='/blog-details'>
													<a>
														<img
															src={process.env.NEXT_PUBLIC_IMG_URL.concat(item.fileName[0])}
															alt='image'
														/>
													</a>
												</Link>
											</div>
											<div className='entry-post-content'>
												<h3>
													<Link href={encodeURI(`/blog/${item.title}`)}>
														<a>{item.title}</a>
													</Link>
												</h3>
												<ul className='entry-meta'>
													<li>
														By <a href='#'>{item.uploadBy}</a>
													</li>
													<li>{format(new Date(item.updatedAt), 'MMMM dd, yyyy')}</li>
												</ul>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}
