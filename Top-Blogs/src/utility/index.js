import toast from "react-hot-toast"

export const getBlogs=()=>{
    let blogs= []
    const storedBlogs = localStorage.getItem('blogs')
    if (storedBlogs){
        blogs=JSON.parse(storedBlogs)
    }
    return blogs
}
// save bookmark fuction
export const saveBlog = blog => {
    let blogs = getBlogs()
    const isExsit = blogs.find(b=>b.id ===blog.id)
    if (isExsit){
       return toast.error('Already Boolmarked')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Boolmarked Successfully!')
}


// delete boolmark function

export const deleteBlogs=id=>{
    let blogs=getBlogs()
    const remainig = blogs.filter(b=>b.id!==id)
    localStorage.setItem('blogs',JSON.stringify(remainig))
    toast.success('Removed from Bookmarked!')
}