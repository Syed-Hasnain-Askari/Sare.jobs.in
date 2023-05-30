import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRouter } from 'next/router';
import Navbar from '../Layouts/Navbar';
import Footer from '../Layouts/Footer';
const MySwal = withReactContent(Swal);

const alertContent = () => {
	MySwal.fire({
		title: 'Thank You!',
		text: 'Your Application was successfully send and will back to you soon',
		icon: 'success',
		timer: 2000,
		timerProgressBar: true,
		showConfirmButton: false,
	});
};

// Form initial state
const INITIAL_STATE = {
	firstName: '',
	email: '',
	mobileNo: '',
	applyFor: '',
	totalExp: '',
	relevantExp: 2,
	currentCTC: '',
	expectedCTC: '',
	noticePeriod: '',
	resume: null,
	description: '',
};

function JobApplyForm() {
	let captcha;
	const { register, handleSubmit, errors, reset } = useForm();
	const [isVerified, setVerified] = useState(false);
	const router = useRouter();
	const onCaptchaChange = (value) => {
		setVerified(true);
	};

	const onSubmit = async (data) => {
		const { firstName, email, mobileNo, applyFor, totalExp, currentCTC, expectedCTC, noticePeriod, resume } = data;
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('email', email);
		formData.append('mobileNo', mobileNo);
		formData.append('applyFor', applyFor);
		formData.append('totalExp', totalExp);
		formData.append('relevantExp', 2);
		formData.append('description', undefined);
		formData.append('currentCTC', currentCTC);
		formData.append('expectedCTC', expectedCTC);
		formData.append('noticePeriod', noticePeriod);
		formData.append('resume', resume[0]);
		captcha.reset();
		reset();
		axios({
			method: 'POST',
			url: process.env.NEXT_PUBLIC_API_URL.concat(process.env.NEXT_PUBLIC_APPLY_JOB),
			data: formData,
		})
			.then((response) => {
				if (response.status === 200) {
					alertContent();
					router.push('/');
				}
			})
			.catch((error) => console.error(error));
	};
	const style = {
		color: '#fff',
		backgroundColor: '#0090ff',
		':hover': {
			backgroundColor: '#0d6efd;',
		},
	};
	return (
		<>
			<div>
				<form
					className='mt-4'
					onSubmit={handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='text'
									className='job-apply-input'
									placeholder='Full Name'
									name='firstName'
									ref={register({
										required: 'Name is Required',
										minLength: {
											value: 3,
											message: "Name can't be less than 3 letters",
										},
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.firstName && errors.firstName?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='email'
									className='job-apply-input'
									placeholder='Email Address'
									name='email'
									ref={register({
										required: 'Email Address is Required',
										pattern: {
											value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
											message: 'Email id does not satisfy pattern',
										},
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.email && errors.email?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='tel'
									className='job-apply-input'
									placeholder='Contact Number'
									name='mobileNo'
									ref={register({
										required: 'Mobile Number is required',
										minLength: {
											value: 10,
											message: 'Mobile Number must have atleast 10 characters',
										},
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.mobileNo && errors.mobileNo?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='text'
									className='job-apply-input'
									placeholder='Experience'
									name='totalExp'
									ref={register({
										required: 'Experience is required',
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.totalExp && errors.totalExp?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='text'
									className='job-apply-input'
									placeholder='Current CTC'
									name='currentCTC'
									ref={register({
										required: 'Current CTC is required',
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.currentCTC && errors.currentCTC?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='text'
									className='job-apply-input'
									placeholder='Expected CTC'
									name='expectedCTC'
									ref={register({
										required: 'Expected CTC is required',
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.expectedCTC && errors.expectedCTC?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='text'
									className='job-apply-input'
									placeholder='Notice Period'
									name='noticePeriod'
									ref={register({
										required: 'Notice Period is required',
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.noticePeriod && errors.noticePeriod?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-12'>
							<div className='form-group'>
								<input
									type='text'
									className='job-apply-input'
									placeholder='Reference From'
									name='applyFor'
									ref={register({
										required: 'Reference From is required',
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.applyFor && errors.applyFor?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-12 col-md-12'>
							<div className='form-group'>
								<input
									type='file'
									className='job-apply-input job-apply-resume'
									placeholder='Resume'
									accept='.pdf, .docx, .doc, .txt'
									name='resume'
									ref={register({
										required: 'Resume is required',
									})}
								/>
								<div
									className='invalid-feedback'
									style={{ display: 'block' }}>
									{errors.resume && errors.resume?.message}
								</div>
							</div>
						</div>
						<div className='col-lg-12 col-md-12 '>
							<div className='d-flex align-items-center justify-content-center'>
								<ReCAPTCHA
									sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
									size='normal'
									ref={(el) => {
										captcha = el;
									}}
									style={{ height: '76px' }}
									onChange={onCaptchaChange}
								/>
							</div>
						</div>

						<div className='col-lg-12 col-md-12 text-center mt-4'>
							<button
								className={`btn ${isVerified ? 'style rounded-3' : 'btn-light'}`}
								style={
									isVerified
										? {
												color: '#fff',
												backgroundColor: '#0090ff',
												':hover': {
													backgroundColor: '#0d6efd',
												},
										  }
										: {}
								}>
								Apply Now
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default JobApplyForm;
