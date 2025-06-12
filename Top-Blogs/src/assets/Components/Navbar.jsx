import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
 <div className='fixed w-full'>
     <div className=' shadow-lg p-2  rounded-xl flex flex-col md:flex-row justify-between'>
    <div>
        <h1 className='text-xl font-semibold' href="">
            Top blogs
        </h1>
    </div>
    <div >
        <ul className='flex justify-around md:flex gap-6'>
            <NavLink to ='/' className='text-xl text-blue-500 font-semibold'>
                 Home
            </NavLink >
            < NavLink to='/blogs' className='text-xl font-semibold'>
             Blogs
            </NavLink>
            <NavLink to ='/bookmarks' className='text-xl font-semibold'>
             Bookmarks
            </NavLink>
        </ul>
    </div>
   </div>
 </div>
    );
};

export default Navbar;