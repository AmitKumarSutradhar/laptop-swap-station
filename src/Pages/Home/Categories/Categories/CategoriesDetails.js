import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetails = ({ category }) => {
    const { name, img, category_id } = category;

    return (
        <div className='border-2 text-center'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <Link to={`/category/${category_id}`} className='btn bg-sky-900 text-white p-2 my-5'>See Details</Link>
        </div>
    );
};

export default CategoryDetails;