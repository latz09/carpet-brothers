import Image from 'next/image';

const ImageItem = ({ image }) => {
	return (
		<div className='scale-80 hover:scale-100 lg:hover:scale-125 md:p-20 transition duration-1000'>
			<div className="grid items-center shadow-sm hover:shadow-xl transition duration-1000">
				<Image src={image} alt='' layout='intrinsic' />
			</div>
		</div>
	);
};

export default ImageItem;
