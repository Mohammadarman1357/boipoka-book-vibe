import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='flex justify-between items-center py-20 px-14 rounded-2xl bg-[#1313130d] w-full'>
            <div>
                <h1 className='font-bold text-6xl playfair-font mb-8'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white text-xl font-bold py-7 px-8 work-sans-font'>View The List</button>
            </div>
            <div>
                <img className='rounded-2xl' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;