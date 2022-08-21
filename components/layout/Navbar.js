import { RiHomeSmileFill } from 'react-icons/ri';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='py-5 bg-blue'>
			<div className='grid grid-cols-2 max-w-7xl mx-auto '>
				<div className=' text-white text-xl font-bold tracking-widest'>
					<Link href={'/'}>
						<a className="flex space-x-2 items-center">
							<span className='text-red font-bold text-3xl'>
								<RiHomeSmileFill />{' '}
							</span>
							<h1>Carpet Brothers</h1>
						</a>
					</Link>
				</div>
				<div className='place-self-end'>
					<Link href={'/contact-us'}>
						<a className='btn bg-red p-4 text-white text-xl'>Contact</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
