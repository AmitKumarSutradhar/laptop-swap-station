import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    // if (token) {
    //     navigate('/');
    // }

    const handleAddProduct = (data) => {
        console.log(data.productName, data.productPrice, data.condition, data.categeory);
        setSignUPError('');
        // createUser(data.email, data.password, data.role)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         toast('User Created Successfully.')
        //         // const userInfo = {
        //         //     displayName: data.name
        //         // }
        //         // updateUser(userInfo)
        //         //     .then(() => {
        //         //         // saveUser(data.name, data.email, data.role);
        //         //     })
        //         //     .catch(err => console.log(err));
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         setSignUPError(error.message)
        //     });
    }

    // const saveUser = (name, email, role) => {
    //     const user = { name, email, role };
    //     console.log(user);
    //     fetch('http://localhost:5000/users', {
    //     fetch('https://swap-station-server.vercel.app/users', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setCreatedUserEmail(email);
    //         })
    // }
    return (
        <div className='w-10/12 mx-auto my-20'>

            <div className='w-96 p-7 mx-auto'>
                <h2 className='text-center text-3xl font-bold'>Add your product </h2>
                <hr className='w-28 h-1 bg-black mx-auto my-4' />
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name: </span></label>
                        <input type="text" {...register("productName", {
                            required: "Name is Required"
                        })} className="input input-bordered relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price: </span></label>
                        <input type="number" {...register("productPrice", {
                            required: "Name is Required"
                        })} className="input input-bordered relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <select {...register("condition")} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                            <option value="excellent">Excelent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <input type="location" {...register("loaction", {
                            required: true
                        })} className="input input-bordered relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        <input type="text" {...register("categeory", {
                            required: "Category is required"
                        })} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4 group relative flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2' value="Add Product" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

            </div>
        </div>
    );
};

export default AddProducts;