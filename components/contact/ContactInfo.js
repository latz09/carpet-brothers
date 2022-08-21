import { AiFillPhone } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';

const ContactInfo = () => {
	return (
		<div className='grid gap-3 text-lg tracking-wide text-gray-800'>
			<div className='flex space-x-4 items-center'>
				<span className='text-2xl text-blue'>
					<BiBuildingHouse />{' '}
				</span>
				<div className='grid'>
					<span>1100 Concord St S #2</span>
					<span>South St Paul, MN 55075</span>
				</div>
			</div>
			<div className='flex space-x-4 items-center'>
				<span className='text-xl text-blue'>
					<AiFillPhone />
				</span>
				<span>{`(763) 283-8472`}</span>
			</div>
			
		</div>
	);
};

export default ContactInfo;
