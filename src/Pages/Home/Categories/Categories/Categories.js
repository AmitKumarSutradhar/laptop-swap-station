import { useQuery } from '@tanstack/react-query';
import CategoriesDetails from './CategoriesDetails';

const Categories = () => {

    // React Query Used
    const { data: categories, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            // const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className='w-10/12 mx-auto my-20'>
            <h2 className='text-center text-3xl font-bold'>Explore Categories </h2>
            <hr className='w-28 h-1 bg-black mx-auto my-4' />
            <div className="grid gap-10 md:grid-cols-4 grid-cols-1 my-10">
                {
                    categories.map(category => <CategoriesDetails
                        key={category._id}
                        category={category}
                    >{category.name}</CategoriesDetails>)
                }
            </div>
        </div>
    );
};

export default Categories;