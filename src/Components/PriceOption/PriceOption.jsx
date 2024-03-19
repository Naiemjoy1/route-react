import PropTypes from 'prop-types'; 
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;

    return (
        <div className='bg-blue-300 rounded-lg p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-bold'>{price}</span>
                <span className="text-5xl">/mon</span>
            </h2>
            <h4 className='text-4xl text-center'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-500 w-full py-4 font-bold rounded-lg hover:bg-green-800 text-white'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
}

export default PriceOption;
