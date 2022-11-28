import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../../Pages/Contexts/AuthProvider/AuthProvider';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>

            <div className="">
                <div className="grid grid-cols-2">
                    <ul>
                        <Link> My orders</Link>
                    </ul>
                </div>
                <div className="grid grid-cols-10">
                    <Outlet></Outlet>
                </div>
            </div>




            {/* <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All users</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Doctor</Link></li>
                                <li><Link to="/dashboard/managedoctors">Manage Doctors</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div> */}
        </div>
    );
};

export default DashboardLayout;