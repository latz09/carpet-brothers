import Image from 'next/image';
import vector from '../public/images/vector-image.svg';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Hours from '../components/contact/Hours';

const ContactUs = () => {
	return (
		<div>
			<div className='grid  lg:grid-cols-2  pt-12 '>
				<div className='grid place-self-center gap-8'>
					<ContactInfo />
					<Hours />
				</div>
				<div className='mt-12'>
					<ContactForm />
				</div>
			</div>
			<div className='grid  place-items-center max-w-7xl mx-auto'>
				<div>
					<Image src={vector} alt='' width={300} height={400} />
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
