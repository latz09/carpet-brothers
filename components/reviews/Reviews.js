
import ReviewItem from './ReviewItem';

const Reviews = ({ data }) => {
	const slideLeft = () => {
		let slider = document.getElementById(id);
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		let slider = document.getElementById(id);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<div className='max-w-4xl mx-auto'>
			<div className='py-20 grid md:grid-cols-2 gap-8 '>
				{data.map((review) => (
					<div key={review.id} >
						<ReviewItem review={review.review} name={review.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;

// flex space-x-4 overflow-x-scroll  scroll-smooth whitespace-nowrap scrollbar-hide
