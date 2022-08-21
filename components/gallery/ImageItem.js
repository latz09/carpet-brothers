import Image from 'next/image';

const ImageItem = ({ image }) => {
	return (
		<div className='hover:scale-110 lg:hover:scale-125 md:p-20 transition duration-1000 '>
			<div className="md:p-2 border-2 border-red bg-blue">
				<Image src={image} alt='' layout='intrinsic' />
			</div>
		</div>
	);
};

export default ImageItem;
