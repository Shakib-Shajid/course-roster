import PropTypes from 'prop-types';

const Card = ({ card }) => {
    const { course_name, credit, price, course_details, image } = card;
    return (
        <div className=' bg-white border-2 border-red-400 w-80 rounded-xl p-4'>
            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>
            <h3 className='text-lg font-semibold mt-4 mb-3'>{course_name}</h3>
            <p className='text-sm text-[#1c1b1b99] mb-4'>{course_details}</p>
            <p className='text-base font-medium text-[#1c1b1b99]'>
                <span>price: {price}</span>
                <span>credit: {credit}</span>
            </p>
            <button className='w-full bg-[#2F80ED] py-2 text-white rounded-lg'>Select</button>

        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,

}

export default Card;

// course_name
// credit
// Price
// course_details
// image