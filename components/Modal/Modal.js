import React from 'react';
import Swal from 'sweetalert2';
export default function Modal() {
	const modalClose = () => {
		console.log('PRESS');
		Swal.close();
	};
	return (
		<section>
			<div className='row '>
				<h4>Coming Soon</h4>
				<div
					className='others-options'
					onClick={modalClose}>
					<a
						className='btn'
						style={{ color: '#fff', backgroundColor: '#000' }}>
						Ok
					</a>
				</div>
			</div>
		</section>
	);
}
