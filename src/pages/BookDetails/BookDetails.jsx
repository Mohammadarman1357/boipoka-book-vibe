import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);

    const { bookName, author, image, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = singleBook;



    const handleRead = id => {
        // store with id
        // where to store
        // array or collection
        // if book already exist then show alert
        // if book not exist then push in the collection of array

        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });

        addToStoredDB(id);
    }

    return (
        <div className='flex flex-col md:flex-row justify-center gap-10 mb-10'>
            <div className='bg-[#1313130d] p-10 md:py-10 md:px-25 rounded-2xl flex items-center justify-center'>
                <img className='w-70 rounded-xl' src={image} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className="font-bold text-4xl playfair-display-font">{bookName}</h1>
                <p className="font-medium work-sans-font my-4 text-[#131313cc]">By : {author}</p>

                <hr className='border-[#13131326]' />
                <h3 className='text-[#131313cc] font-medium work-sans-font my-4'>{category}</h3>
                <hr className='border-[#13131326]' />

                <h2 className='work-sans-font my-4'>
                    <span className='font-bold'>Review : </span>
                    {review}
                </h2>

                <h2 className='work-sans-font mb-4'>
                    <span className='font-bold'>Tags : </span>
                    {
                        tags.map(tag =>
                            <button className="text-[#23BE0A] font-medium work-sans-font py-2 px-4 bg-[#23be0a0d] rounded-4xl ml-4">{tag}</button>
                        )
                    }
                </h2>
                <hr className='border-[#13131326]' />

                <div className='my-6'>
                    <h1 className='my-3 work-sans-font'>
                        <span className='text-[#282828cc] mr-4'>Number of Pages : </span>
                        <span className='font-semibold text-[#131313]'>{totalPages}</span>
                    </h1>
                    <h1 className='my-3 work-sans-font'>
                        <span className='text-[#282828cc] mr-4'>Publisher : </span>
                        <span className='font-semibold text-[#131313]'>{publisher}</span>
                    </h1>
                    <h1 className='my-3 work-sans-font'>
                        <span className='text-[#282828cc] mr-4'>Year of Publishing : </span>
                        <span className='font-semibold text-[#131313]'>{yearOfPublishing}</span>
                    </h1>
                    <h1 className='my-3 work-sans-font'>
                        <span className='text-[#282828cc] mr-4'>Rating : </span>
                        <span className='font-semibold text-[#131313]'>{rating}</span>
                    </h1>

                    <span className='flex gap-4 work-sans-font font-semibold text-xl mt-4'>
                        <button onClick={() => handleRead(id)} className='btn btn-outline border-[#1313134d] py-4 px-7'>Read</button>
                        <button className='btn bg-[#50B1C9] text-white'>Wishlist</button>
                    </span>

                </div>
            </div>

        </div>
    );
};

export default BookDetails;