import React from 'react';
import { MapPin, NotebookText, Star, User, Users } from "lucide-react";

const ReadBook = ({ b }) => {
    const { bookName, image, tags, author, category, rating, yearOfPublishing, publisher, totalPages } = b;


    return (
        <div className="flex p-6 gap-5 bg-white rounded-2xl border-1 border-[#13131326] my-5 ">
            <div className="bg-[#F3F3F3] p-6 rounded-2xl">
                <img className="w-[125px] h-[166px] rounded-xl mx-auto" src={image} alt="" />
            </div>
            <div className="space-y-3 flex-1">

                <h1 className="font-bold text-2xl playfair-display-font">{bookName}</h1>
                <p className="font-medium work-sans-font">By : {author}</p>


                <h2 className='flex items-center gap-4 playfair-display-font'>
                    <span className='font-bold'>Tags : </span>
                    {
                        tags.map(tag =>
                            <button className="text-[#23BE0A] font-medium work-sans-font py-1 px-4 bg-[#23be0a0d] rounded-4xl">{tag}</button>
                        )
                    }
                    <span className='flex work-sans-font text-[#131313cc] gap-1'><MapPin /> Year of Publishing : {yearOfPublishing}</span>
                </h2>

                <span className='flex gap-4'>
                    <span className='flex work-sans-font text-[#13131399] gap-1'><Users /> Publisher : {publisher}</span>
                    <span className='flex work-sans-font text-[#13131399] gap-1'><NotebookText /> Pages : {totalPages}</span>
                </span>

                <hr className='border-[#13131326] my-4' />

                <div className='space-x-4'>
                    <button className="text-[#328EFF] font-medium work-sans-font py-1 px-4 bg-[#328eff26] rounded-4xl">Category : {category}</button>
                    <button className="text-[#FFAC33] font-medium work-sans-font py-1 px-4 bg-[#ffac3326] rounded-4xl">Rating : {rating}</button>
                    <button className="text-white font-medium work-sans-font py-1 px-4 bg-[#23BE0A] rounded-4xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;