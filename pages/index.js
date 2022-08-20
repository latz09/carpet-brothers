import AboutBlurb from '../components/about/AboutBlurb';
import Hero from '../components/utils/Hero';
import landingHero from '../public/images/logo.jpg';
import installationHero from '../public/images/kitchen.jpg'

export default function Home() {
	return (
		<div className='grid'>
			<Hero
				image={landingHero}
				positionTo={'center'}
				linkTo={'/contact-us'}
				heading={'Carpet Brothers'}
				subHeading={'Quality installation at a great price'}
				buttonTitle={'Schedule Consultation'}
				
			/>
			<AboutBlurb />
			<Hero
				image={installationHero}
				positionTo={'center'}
				linkTo={'/our-work'}
				heading={'We install it all'}				
				buttonTitle={'Our Work'}
				
			/>
			<div className="min-h-screen"></div>
		</div>
	);
}
