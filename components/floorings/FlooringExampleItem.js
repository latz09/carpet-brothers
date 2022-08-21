import Image from 'next/image';

const FlooringExampleItem = ({ image, title }) => {
	return (
		<div className='relative text-center grid'>
			<div className='grid items-center shadow-lg'>
				<Image src={image} alt='dd' width={300} height={300} />
			</div>
            <div className='absolute bottom-0  bg-black bg-opacity-60 px-1 md:px-2 md:py-3'>
					<h1 className=' text-lg md:text-xl  tracking-wide text-white'>
						{title}
					</h1>
				</div>
		</div>
	);
};

export default FlooringExampleItem;
