import {flooring} from '../../data/floorings.js'
import FlooringExampleItem from './FlooringExampleItem';

const FlooringExamples = () => {
    
	return <div className='grid gap-6 grid-cols-2 lg:grid-cols-4 justify-items-center py-12 max-w-7xl mx-auto'>
        {flooring.map(flooring => (
            <div key={flooring.id}>
                <FlooringExampleItem image={flooring.image} title={flooring.title}/>
            </div>
        ))}

      

    </div>;
};

export default FlooringExamples;
