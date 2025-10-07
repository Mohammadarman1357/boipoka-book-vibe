import React, { useEffect, useState } from 'react';
import { redirect, useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';
import Book from '../Book/Book';
import ReadBook from '../ReadBook/ReadBook';
import { ChevronDown } from 'lucide-react';

const ReadList = () => {
    // worst case
    const [readList, setReadList] = useState([]);

    const [sort, setSort] = useState("");

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    }, [])

    const handleSort = (type) => {
        setSort(type);

        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === "rating") {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating);
        }
    }
    return (
        <div>
            <div className='bg-[#1313130d] p-8 rounded-2xl mb-4'>
                <h1 className='font-bold playfair-display-font text-3xl text-center'>Books</h1>
            </div>

            <details className="dropdown mb-5">
                <summary className='btn text-white font-semibold text-xl work-sans-font py-3 px-4 bg-[#23BE0A] '>
                    Sort by : {sort ? sort : ""}
                    <ChevronDown />
                </summary>

                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => { handleSort("pages") }}>Pages</a></li>
                    <li><a onClick={() => { handleSort("rating") }}>Rating</a></li>
                </ul>
            </details>

            <div>

                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            readList.map(b => <ReadBook key={b.bookId} b={b}></ReadBook>)
                        }
                    </TabPanel>

                    <TabPanel>
                        <h2>Wishlist Book</h2>
                    </TabPanel>
                </Tabs>

            </div>
        </div>
    );
};

export default ReadList;