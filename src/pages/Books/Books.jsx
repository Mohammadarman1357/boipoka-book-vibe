import React, { Suspense, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    return (
        <div>
            <h1 className='font-bold text-[40px] playfair-display-font text-center my-6'>Books</h1>

            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
                    {
                        data.map((singleBook) =>
                            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
                        )
                    }
                </div>
            </Suspense>

        </div>
    );
};

export default Books;