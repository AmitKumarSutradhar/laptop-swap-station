import React from 'react';

const SingleCategoryDetails = ({ product }) => {
    const { name } = product;

    return (
        <div>
            {name}
        </div>
    );
};

export default SingleCategoryDetails;