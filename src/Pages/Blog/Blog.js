import React from 'react';
import BlogDetails from './BlogDetails';
import Blogs from './Blogs';

const Blog = () => {
    const allBlogs = [
        {
            id: "01",
            name: 'What are the different ways to manage a state in a React application?',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse quis laborum autem unde iste, quod dolores officiis vero consequatur laboriosam eius nisi quas nam molestiae! Odit officiis architecto ea.'
        },
        {
            id: "02",
            name: 'How does prototypical inheritance work?',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse quis laborum autem unde iste, quod dolores officiis vero consequatur laboriosam eius nisi quas nam molestiae! Odit officiis architecto ea.'
        },
        {
            id: "03",
            name: 'What is a unit test? Why should we write unit tests?',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse quis laborum autem unde iste, quod dolores officiis vero consequatur laboriosam eius nisi quas nam molestiae! Odit officiis architecto ea.'
        },
        {
            id: "04",
            name: 'React vs. Angular vs. Vue?',
            details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, esse quis laborum autem unde iste, quod dolores officiis vero consequatur laboriosam eius nisi quas nam molestiae! Odit officiis architecto ea.'
        }
    ]
    return (
        <div>
            {
                allBlogs.map(singleBlog => <BlogDetails
                    key={singleBlog.id}
                    singleBlog={singleBlog}
                ></BlogDetails>)
            }
        </div>
    );
};

export default Blog;