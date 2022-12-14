import Link from 'next/link';

const AboutBlurb = () => {
	return (
		<div className=''>
			<div className='max-w-4xl mx-auto grid items-center justify-items-center h-[42vh]'>
				<p className='mx-4 leading-8 text-justify text-gray-600 text-lg font-bold tracking-wider '>
					At{' '}
					<span className='text-red text-2xl tracking-normal'>
						Carpet Brothers and Flooring
					</span>{' '}
					 we consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices.
					Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum
					posuere.
				</p>
			</div>
		</div>
	);
};

export default AboutBlurb;
