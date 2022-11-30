import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import AllSellerDetails from './AllSellerDetails';

const AllSellers = () => {
    const { user } = useContext(AuthContext);

    // const [allSeller, setSellers] = useState([]);
    // useEffect(() => {
    //     // fetch('http://localhost:5000/users/role?role=seller')
    //     fetch(`https://swap-station-server.vercel.app/users/role?role=buyer`)
    //         .then(res => res.json())
    //         .then(data => setSellers(data))
    // }, [user?.email]);


    // React Query Used
    const { data: allSeller, isLoading } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/role?role=seller`);
            // const res = await fetch(`https://swap-station-server.vercel.app/users/role?role=seller`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div><section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">List of all seller</h1>
                    {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
                </div>
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table class="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Seller Name</th>
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
                                {/* <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th> */}
                                <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Delete</th>
                                <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allSeller.map(seller => <AllSellerDetails
                                seller={seller}
                            ></AllSellerDetails>)}
                        </tbody>
                    </table>
                </div>
                {/* <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                </div> */}
            </div>
        </section>


        </div>
    );
};

export default AllSellers;