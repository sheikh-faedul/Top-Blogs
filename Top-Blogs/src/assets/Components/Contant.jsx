import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
 
 


const Contant = () => {
    const blog = useLoaderData()
      const {cover_image,title,description,published_at,tags,body_html}=blog
    return (
        
          <div
            className=" mx-auto  rounded-xl  p-4 ">
				<img role="presentation" className=" w-full rounded h-44 " src= {cover_image} />
                	<div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
           {tags.map(tag=>(<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline">#{tag}</a>))}
			
		 
		</div>
				<div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
              
					
				</div>
			</div>
        
    );
};

export default Contant;