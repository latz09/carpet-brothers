import { RiHomeSmileFill } from 'react-icons/ri';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className='py-5 bg-blue px-2'>
			<div className='grid grid-cols-3 max-w-7xl mx-auto '>
				<div className=' col-span-2 text-white text-lg md:text-xl font-bold tracking-widest hover:opacity-70 transition duration-700 '>
					<Link href={'/'}>
						<a className='flex space-x-2 items-center'>
							<span className='text-red font-bold text-3xl'>
								<RiHomeSmileFill />{' '}
							</span>
							<div className='grid justify-items-center '>
								<h1>Carpet Brothers</h1>
								<span className='text-sm text-gray-200'>{`763 283-8472`}</span>
							</div>
						</a>
					</Link>
				</div>
				<div className='self-center place-self-end'>
					<Link href={'/contact-us'}>
						<a className='btn bg-red p-4 text-white text-xl'>Contact</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
