import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {cover_image,title,description,published_at,id}=blog
    return (
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
    );
};

export default BlogCard;