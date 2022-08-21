import AboutBlurb from '../components/about/AboutBlurb';
import Hero from '../components/utils/Hero';
import landingHero from '../public/images/logo.jpg';
import installationHero from '../public/images/kitchen.jpg';
import repairHero from '../public/images/repair.jpg';
import FlooringExamples from '../components/floorings/FlooringExamples';

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
				subHeading={
					' sed do eiusmod tempor incididunt ut laboreinterdum posuere'
				}
				buttonTitle={'Our Work'}
			/>
			<div className="mx-2">
				<FlooringExamples />
			</div>
			<Hero
				image={repairHero}
				positionTo={'center'}
				linkTo={'/contact'}
				heading={'Need a flooring repair?'}
				subHeading={
					' sed do eiusmod tempor incididunt ut laboreinterdum posuere'
				}
				buttonTitle={'Schedule Consultation'}
			/>
		</div>
	);
}
