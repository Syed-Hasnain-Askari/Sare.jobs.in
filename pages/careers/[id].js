import { useRouter } from 'next/router';
import React, { useState } from 'react';
import MainBanner from '../../components/Home/MainBanner';
import JobApplyForm from '../../components/Careers/JobApplyForm';
import { getData } from '../../requests';
import Layout from '../../components/Layouts/Layout';

function JobDescriptionPage() {
	const [isFormOpen, setFormOpen] = useState(false);
	const router = useRouter();
	const { id } = router.query;
	const { data, error } = getData(process.env.NEXT_PUBLIC_API_URL.concat(process.env.NEXT_PUBLIC_IND_JOB).concat(id));
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	const jobDets = data.data;
	const { title, jobAddress, category, vacancy, Experience, subTitle1, subTitle2, secondDescription1, secondDescription2 } =
		jobDets;
	return (
		<Layout>
			<MainBanner
				heading='Find Your Next 
                Opportunity, 
                Build Your Career'
				image='/images/jobs-image-ic.png'
			/>
			<div className='container careers'>
				<div className='row my-5'>
					<div className='col-sm-10 col-md-12 col-lg-12 shadow rounded-3 p-3 p-md-5 mx-md-2'>
						<h6
							className='link-dark'
							style={{ cursor: 'pointer' }}
							onClick={() => router.back()}>{`<   Back`}</h6>
						<div className='border-0 border-bottom py-2 job-card'>
							<div className='d-flex flex-column flex-md-row justify-content-between'>
								<h3 className='job-card-title'>{title}</h3>
								<p className='job-card-address'>{jobAddress}</p>
							</div>
							<div>
								<p className='job-card-address'>{category}</p>
								<div className='d-flex gap-2'>
									<p>
										No of Position: <span className='job-card-val'>{vacancy}</span>
									</p>
									<p>
										Experience: <span className='job-card-val'>{Experience}</span>
									</p>
								</div>
							</div>
						</div>
						{isFormOpen ? (
							<JobApplyForm />
						) : (
							<div>
								{/* JD & Requirements */}
								<div className='mt-3'>
									<h4 className='job-card-title'>{subTitle1}</h4>
									<ul>
										{secondDescription1.map((eachPoint, index) => (
											<li key={`point_${index + 1}`}>{eachPoint}</li>
										))}
									</ul>
									<h4 className='job-card-title'>{subTitle2}</h4>
									<ul>
										{secondDescription2.map((eachPoint, index) => (
											<li key={`point_${index + 1}`}>{eachPoint}</li>
										))}
									</ul>
								</div>
								<div className='text-center mt-4'>
									<button
										style={{
											color: '#fff',
											backgroundColor: '#0090ff',
											':hover': {
												backgroundColor: '#0d6efd;',
											},
										}}
										className='btn rounded-3 job-card-title'
										onClick={() => setFormOpen(true)}>
										Apply Now
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default JobDescriptionPage;
