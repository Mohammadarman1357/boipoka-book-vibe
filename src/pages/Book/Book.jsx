import { Star } from "lucide-react";
import { Link } from "react-router";


const Book = ({ singleBook }) => {

    const { bookId, author, image, bookName, tags, category, rating } = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="flex flex-col p-6 bg-white rounded-2xl border-1 border-[#13131326]">
                <div className="bg-[#F3F3F3] p-6 rounded-2xl mb-6">
                    <img className="w-[125px] h-[166px] rounded-xl mx-auto" src={image} alt="" />
                </div>
                <div className="space-y-4 border-b-2 border-dashed border-b-[#13131326] mb-4">
                    <div className="flex gap-2">
                        {
                            tags.map(tag =>
                                <button className="text-[#23BE0A] font-medium work-sans-font py-2 px-4 bg-[#23be0a0d] rounded-4xl">
                                    {tag}
                                </button>
                            )
                        }
                    </div>


                    {/* <span>
                    <button className="text-[#23BE0A] font-medium work-sans-font py-2 px-4 bg-[#23be0a0d] rounded-4xl">{tag1}</button>
                    <button className="text-[#23BE0A] font-medium work-sans-font py-2 px-4 bg-[#23be0a0d] rounded-4xl ml-3">{tag2}</button>
                </span> */}
                    <h1 className="font-bold text-2xl playfair-display-font">{bookName}</h1>
                    <p className="font-medium work-sans-font mb-4">By : {author}</p>

                </div>
                <span className="flex justify-between items-center">
                    <span className="text-[#131313cc] font-medium work-sans-font">{category}</span>
                    <span className="flex items-center gap-2">
                        <span className="text-[#131313cc] font-medium work-sans-font">{rating}</span>
                        <Star className="w-5 h-5"></Star>
                    </span>

                </span>
            </div>
        </Link>
    );
};

export default Book;
