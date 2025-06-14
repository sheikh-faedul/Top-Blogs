import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
 

const BlogCard = ({blog,deletable,handelDelete}) => {
    const {cover_image,title,description,published_at,id}=blog
	
    return (
        	<div className='flex relative'>
			<Link
            to={`/blog/${id}`}
             rel="noopener noreferrer" href="#" className="max-w-sm mx-auto transition border-2 hover:scale-105  rounded-xl group  ">
				<img role="presentation" className=" w-full rounded h-44 " src= {cover_image} />
				<div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{published_at}</span>
					<p> {description}</p>
				</div>
			</Link>
			{deletable && (<div
			onClick={()=>handelDelete(id)}
			 className='bg-white p-3 ml-4 rounded-full hover: cursor-pointer hover: scale-105 overflow-hidden -top-2 -right-5 absolute'><MdDelete size={20}/></div>)}
			</div>
    );
};

export default BlogCard;