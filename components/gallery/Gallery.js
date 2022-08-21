import { v4 as uuid } from 'uuid';
import ImageItem from './ImageItem';
import { galleryImages } from '../../data/galleryImages';
import PageHeading from '../utils/PageHeading';

const Gallery = () => {
	return (
		<div className=' max-w-7xl mx-auto px-2 md:px-4 bg-gray-50 rounded-lg border-red'>
			<PageHeading title='Recent Work' />
			<div className='grid xl:grid-cols-2 place-items-center gap-8 md:gap-4'>
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
