import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    return (
        <div >
            <div className='bg-white rounded-xl w-72 p-4 mx-auto'>
                <h2 className='text-lg font-bold text-[#2F80ED] leading-7 my-6 '>Credit Hour Remaining 7 hr</h2>
                <div className='border-y-2 py-4'>
                    <h2 className='text-xl font-bold mb-5'>Course Name</h2>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)
                    }
                </div>
                <h2 className='font-medium py-4 border-b-2 text-[#1c1b1bcc]'>Total Credit Hour: 10</h2>
                <h4 className='font-medium py-4  text-[#1c1b1bcc]'>Total Price : 48000 USD</h4>
            </div>
        </div>
    );
};

Bookmarks.proTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;