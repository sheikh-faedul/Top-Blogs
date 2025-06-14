import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
 

const BlogCard = ({blog,deletable,handelDelete}) => {
    const {cover_image,title,description,published_at,id}=blog
	
    return (
        	<div className='relative'>
			<Link
            to={`/blog/${id}`}
             rel="noopener noreferrer" href="#" className="max-w-sm mx-auto transition border-2 hover:scale-105  rounded-xl group  ">
				<img role="presentation" className=" w-full rounded h-44 " src= {cover_image} />
				<div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs ">{published_at}</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</Link>
			{deletable&&<div
			onClick={()=>handelDelete(id)}
			className='absolute border  rounded-4xl p-3 hover:scale-105 group-hover: bg-blue-300  cursor-pointer  -top-2 -right-2'><MdDelete size={20}/></div>}
			</div>
    );
};

export default BlogCard;