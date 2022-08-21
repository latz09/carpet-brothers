import Image from 'next/image';
import vector from '../../public/images/vector-image.svg';

const ContactForm = () => {
	return (
		<div className='w-full '>
			<form className='tracking-wider  mx-4'>
				<div className='grid grid-cols-2 items-end'>
					<div className=' grid gap-3  w-2/3 '>
                        <h1 className="text-center py-5 text-3xl text-red tracking-widest">Contact Us</h1>
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
					<div className='mt-12'>
						<Image src={vector} alt='' width={200} height={300} />
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
			</form>
		</div>
	);
};

export default ContactForm;
