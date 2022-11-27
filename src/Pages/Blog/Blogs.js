import React, { useEffect, useState } from 'react';
import BlogsDetails from './BlogsDetails';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    return (
        <div>
            <h2 className='text-3xl text-center mt-5'>Welcome to Laptop Swap Sation blog.</h2>

            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            blogs.map(blog => <BlogsDetails
                                key={blog.id}
                                blog={blog}
                            ></BlogsDetails>)
                        }

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blogs;