import { v4 as uuid } from 'uuid';
import ImageItem from './ImageItem';
import { galleryImages } from '../../data/galleryImages';

const Gallery = () => {
	return (
		<div className=' max-w-7xl mx-auto px-2 md:px-4 '>
			<div className='grid xl:grid-cols-2 place-items-center  gap-4  bg-landscape-500 py-9'>
				{galleryImages.map((image) => (
					<div key={uuid()}>
						<ImageItem image={image} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
