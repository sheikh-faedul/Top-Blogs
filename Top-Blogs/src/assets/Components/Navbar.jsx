import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        // navbar fixed but over scroll contant z-index don't work
 <div className='fixed w-full z-10'>   
     <div className='shadow-lg p-2  rounded-xl flex flex-col md:flex-row justify-between'>
    <div className=''>
        <h1 className='text-xl font-semibold' href="">
            Top blogs
        </h1>
    </div>
    <div className='' >
        <ul className='flex justify-around md:flex gap-6'>
            <NavLink to ='/' className= {({isActive})=>isActive?'text-xl text-blue-300 font-semibold':'text-xl font-semibold'}>
                 Home
            </NavLink >
            <NavLink to ='/blogs' className= {({isActive})=>isActive?'text-xl text-blue-300 font-semibold':'text-xl font-semibold'}>
                 Blogs
            </NavLink >
            <NavLink to ='/bookmarks' className= {({isActive})=>isActive?'text-xl text-blue-300 font-semibold':'text-xl font-semibold'}>
                 Bookmarks
            </NavLink >
            
        </ul>
    </div>
   </div>
 </div>
    );
};

export default Navbar;