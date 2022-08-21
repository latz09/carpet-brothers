

const ContactForm = () => {
	return (
		<div className=' '>
			<form className='tracking-wider  mx-4'>
				<div className='grid grid-cols-2 items-end'>
					<div className=' grid gap-3  w-2/3 '>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							className='form-input'
						/>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Email'
							className='form-input'
						/>
						<input
							type='text'
							name='number'
							id='number'
							placeholder='Phone Number'
							className='form-input '
						/>
					</div>
				
				</div>
				<div className='col-span-2 mt-4'>
					<textarea
						rows='8'
						name='message'
						id='message'
						placeholder='How can we help you?'
						className='form-input w-full'
					></textarea>
				</div>
                <div className="grid justify-items-center py-2">
                <button className="bg-red btn text-white ">Submit</button>
                </div>
			</form>
		</div>
	);
};

export default ContactForm;
