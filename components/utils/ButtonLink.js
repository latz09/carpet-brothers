import Link from 'next/link';

const ButtonLink = ({ linkTo, buttonTitle }) => {
	return (
		<div className='btn bg-blue'>
			<Link href={linkTo}>
				<a className=''>{buttonTitle}</a>
			</Link>
		</div>
	);
};

export default ButtonLink;
