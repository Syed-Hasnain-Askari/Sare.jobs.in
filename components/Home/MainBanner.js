import React from 'react';
export default function MainBanner(props) {
	return (
		<>
			<div className='ml-main-banner-area'>
				<div className='container-fluid'>
					<div className='row align-items-center mx-lg-5 gx-5'>
						<div className='col-lg-6 col-md-12'>
							<div className='ml-main-banner-content mx-lg-5 mx-5'>
								<h1 className='fs-1'>
									{props.heading.split(' ').map((line, index) => (
										<React.Fragment key={index}>
											{line}
											{(index + 1) % 2 != 0 && ' '}
											{(index + 1) % 2 === 0 && <br />}
										</React.Fragment>
									))}
								</h1>

								<p className='text-justify'>{props.para}</p>
							</div>
						</div>

						<div className='col-lg-6 col-md-12'>
							<div className='ml-main-banner-image m-5'>
								<img
									src={props.image}
									alt='image'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='ai-main-banner-shape1'>
					<img
						src='/images/home-seven/banner/shape1.png'
						alt='image'
					/>
				</div>
				<div className='ai-main-banner-shape2'>
					<img
						src='/images/home-seven/banner/shape2.png'
						alt='image'
					/>
				</div>
				<div className='ai-main-banner-shape3'>
					<img
						src='/images/home-seven/banner/shape4.png'
						alt='image'
					/>
				</div>
			</div>
		</>
	);
}
