import Image from 'next/image';

const ImageItem = ({ image }) => {
	return (
		<div className='hover:scale-110 lg:hover:scale-125 md:p-20 transition duration-1000 '>
			<div className="pb-1 bg-blue md:border-2 border-blue grid items-center shadow-xl">
				<Image src={image} alt='' layout='intrinsic' />
			</div>
		</div>
	);
};

export default ImageItem;
