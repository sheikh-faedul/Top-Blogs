import React, { useEffect, useState } from 'react';
import { deleteBlogs, getBlogs } from '../utility';
import BlogCard from '../assets/Components/blogCard';
import EmptyBlogs from '../assets/Components/EmptyBlogs';

const Bookmarks = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    },[])
    const handelDelete =id =>{
		deleteBlogs(id)
         const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
	}
    if(blogs.length<1)return<EmptyBlogs message={'No Bookmarks Abailable'} address={'/blogs'} label={'GO TO Blogs'}></EmptyBlogs>
    return (
        	<div className="grid px-4 sm:px-8 lg:px-12 py-6 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{blogs.map(blog=>(<BlogCard handelDelete={handelDelete} deletable={true} blog={blog}></BlogCard>))}
		</div>
    );
};

export default Bookmarks;