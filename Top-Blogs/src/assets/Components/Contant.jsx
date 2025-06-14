import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Contant = () => {
    const blog = useLoaderData()
      const {cover_image,title,description,published_at,tags}=blog
    return (
        
          <div
            className=" mx-auto  rounded-xl  p-4 ">
				<img role="presentation" className=" w-full rounded h-44 " src= {cover_image} />
                	<div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
           {tags.map(tag=>(<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline">#{tag}</a>))}
			
		 
		</div>
				 
			</div>
        
    );
};

export default Contant;