import React from 'react';

export default function Hire() {
	return (
		<section className='about-area pb-5'>
			<div className='container'>
				<div className='row pb-70'>
					<div className='d-flex justify-content-center align-content-center'>
						<h1>How we hire</h1>
					</div>
				</div>
				<div className='row pb-5'>
					<div className='d-flex justify-content-center align-content-center'>
						<div className='col-lg-8 col-sm-12 col-md-6'>
							<div className='stepwizard'>
								<div className='stepwizard-row'>
									<div className='stepwizard-step flex-sm-column'>
										<button className='btn-circle fs-2'>1</button>
										<h6 className='text-uppercase pt-3 fs-4'>Apply</h6>
										<p className='fw-2 card-text'>
											Upload your resume and <br /> submit your application.
										</p>
									</div>
									<div className='stepwizard-step flex-sm-column'>
										<button className='btn-circle fs-2'>2</button>
										<h6 className='text-uppercase pt-3 fs-4'>Interviews</h6>
										<p className='fw-2 card-text'>
											Get to know your recruiter <br /> and potential coworkers in <br /> a series of phone, video,
											<br />
											and/or onsite interviews.
										</p>
									</div>
									<div className='stepwizard-step flex-sm-column'>
										<button className='btn-circle fs-2'>3</button>
										<h6 className='text-uppercase pt-3 fs-4'>Offers</h6>
										<p className='fw-2 card-text'>
											Accept your job offer and <br /> join the ByteDance team!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
