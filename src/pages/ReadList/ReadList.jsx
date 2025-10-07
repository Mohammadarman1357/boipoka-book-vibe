import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';
import Book from '../Book/Book';
import ReadBook from '../ReadBook/ReadBook';

const ReadList = () => {
    // worst case
    const [readList, setReadList] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList);
    }, [])

    return (
        <div>
            <div className='bg-[#1313130d] p-8 rounded-2xl mb-4'>
                <h1 className='font-bold work-sans-font text-2xl text-center'>Books</h1>
            </div>

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