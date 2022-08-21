import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Hours from '../components/contact/Hours';

const ContactUs = () => {
	return (
		<div className='grid lg:grid-cols-2 place-items-center max-w-7xl mx-auto py-12 '>
			<div className='grid gap-8'>
				<ContactInfo />
				<Hours />
			</div>
			
				<ContactForm />
			
		</div>
	);
};

export default ContactUs;
