import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryDetails from './SingleCategoryDetails';

const SingleCategory = () => {
    const categoryProducts = useLoaderData();
    return (
        <div>
            <h2>This is Category has Product: {categoryProducts.length}</h2>
            {
                categoryProducts.map(product => <SingleCategoryDetails
                    key={product._id}
                    product={product}
                ></SingleCategoryDetails>)
            }
        </div>
    );
};

export default SingleCategory;