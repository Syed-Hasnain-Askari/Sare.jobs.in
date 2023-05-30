import Link from 'next/link';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { jobCategories } from '../../data/careers';
import { getData } from '../../requests';
import Layout from '../Layouts/Layout';

function JobCategory({ state, onChange }) {
	return (
		<div className='p-2'>
			<h4>Job Category</h4>
			<div>
				{jobCategories.map((eachCat, index) => (
					<div
						key={`category-${index}`}
						className='form-check my-2'>
						<input
							className='form-check-input'
							type='checkbox'
							value={eachCat || ''}
							checked={state[index] || false}
							onChange={() => onChange(index)}
							id={eachCat.split(' ').join('_')}
						/>
						<label
							className='form-check-label fs-6'
							htmlFor='flexCheckDefault'>
							{eachCat}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

function EachJobCard({ jobDetails }) {
	const { title, jobAddress, category, vacancy, Experience, _id } = jobDetails;
	return (
		<Link href={`/careers/${_id}`}>
			<a className='w-100'>
				<div className='border-0 border-bottom py-2 job-card mb-4'>
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
			</a>
		</Link>
	);
}

const initialCategoryState = Array(jobCategories.length).fill(false);

function AllCareers() {
	const jobsPerPage = 8;
	const [offset, setOffset] = useState(0);
	const [perPage, setPerPage] = useState(jobsPerPage);
	const [currentPage, setCurrentPage] = useState(0);
	// const [jobCategoryState, setJobCategoryState] = useState([
	//   true,
	//   ...initialCategoryState.slice(0, jobCategories.length - 2),
	// ]);
	// const [chosenIndex, setChosenIndex] = useState(0);
	const { data, error } = getData(process.env.NEXT_PUBLIC_API_URL.concat(process.env.NEXT_PUBLIC_JOBS));
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	const handlePageClick = (e) => {
		const selectedPage = e.selected;
		const offset = selectedPage * perPage;
		setCurrentPage(selectedPage);
		setOffset(offset);
	};

	const jobs = data.data;
	const currentItems = jobs.slice(offset, offset + jobsPerPage);
	// const filteredJobs =
	//   chosenIndex === 0
	//     ? jobs
	//     : jobs.filter((each) => each.category === jobCategories[chosenIndex]);

	// const onCategoryChange = (index) => {
	//   const newCategoryState = [...initialCategoryState];
	//   newCategoryState[index] = true;
	//   setJobCategoryState(newCategoryState);
	//   setChosenIndex(index);
	// };
	return (
		<div className='container careers'>
			<div className='row my-5 gap-3 gap-md-4'>
				<div className=' col-sm-10 col-md-12 col-lg-12 shadow rounded-3 p-md-3 mx-md-2 px-md-3'>
					<p className='careers-count mt-3 fs-6'>
						Showing {offset + 1}-{offset + currentItems.length} out of {jobs.length} results
					</p>
					<div className=''>
						{currentItems &&
							currentItems.map((eachJob, index) => (
								<EachJobCard
									key={index + 89}
									jobDetails={eachJob}
								/>
							))}
					</div>
				</div>

				<ReactPaginate
					breakLabel='...'
					nextLabel='>>'
					onPageChange={handlePageClick}
					pageClassName='page-numbers'
					pageLinkClassName='page-numbers'
					activeLinkClassName='page-numbers current'
					previousClassName='prev page-numbers'
					previousLinkClassName='prev page-numbers'
					nextClassName='next page-numbers'
					nextLinkClassName='next page-numbers'
					breakLinkClassName='page-link'
					containerClassName='pagination-area'
					pageRangeDisplayed={5}
					disabledLinkClassName='page-numbers disabled'
					pageCount={Math.ceil(jobs.length / jobsPerPage)}
					previousLabel='<<'
				/>
				{/* <div className="col-md-12 col-lg-3 shadow p-3 rounded-3 align-self-start">
          <JobCategory state={jobCategoryState} onChange={onCategoryChange} />
        </div> */}
			</div>
		</div>
	);
}

export default AllCareers;
