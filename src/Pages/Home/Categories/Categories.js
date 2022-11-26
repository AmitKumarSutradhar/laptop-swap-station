import React, { useEffect, useState } from 'react';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            // fetch('https://tax-advisor-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-center text-3xl font-bold'>Explore Categories </h2>
            <div className="grid gap-10 md:grid-cols-4 grid-cols-1 my-5">
                {
                    categories.map(category => <CategoriesDetails
                        category={category}
                    ></CategoriesDetails>)
                }
            </div>
        </div>
    );
};

export default Categories;