import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const links = <>
        <Link to={'/about'}><li className='ml-2'>About</li></Link>
        <li className='ml-2'>Pages to Read</li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm work-sans-font">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            <Link to={'/'}> <li className='ml-2'>Home</li></Link>
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="text-[28px] text-[#131313] font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center ">
                        <li>
                            <Link><button className='btn btn-outline text-[#23BE0A] font-semibold'>Home</button></Link>
                        </li>
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex gap-4'>
                        <button className='btn border-none bg-[#23BE0A] text-white'>Sign In</button>
                        <button className='btn border-none bg-[#59C6D2] text-white'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;