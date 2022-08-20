import Image from 'next/image';
import ButtonLink from './ButtonLink';

const Hero = ({
	image,
	positionTo,
	linkTo,
	heading,
	subHeading,
	buttonTitle,
}) => {
	return (
		<div className='relative w-[100vw] h-[40vh] md:h-[70vh]'>
			<div className='-z-10'>
				<Image
					src={image}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition={positionTo}
				/>
			</div>
			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-70'>
				<div className='grid gap-4 text-center tracking-widest'>
					<h1 className='text-3xl md:text-6xl text-gray-100'>{heading}</h1>
					<span className=' text-lg md:text-2xl text-gray-300 '>
						{subHeading}
					</span>
					<div className=' mx-auto text-white'>
						<ButtonLink linkTo={linkTo} buttonTitle={buttonTitle} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
