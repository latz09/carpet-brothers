import { AiFillStar } from 'react-icons/ai';

const ReviewItem = ({ name, review }) => {
	return (
		<div className='grid gap-2 tracking-wider mx-3'>
			<span className='text-lg md:text-2xl text-gray-700 '>{name}</span>
			<div className='flex space-x-2 text-blue md:text-xl '>
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
				<AiFillStar />
			</div>
			<span className='mt-3 md:text-lg text-gray-900 text-justify italic tracking-wider'>{review}</span>
		</div>
	);
};

export default ReviewItem;
