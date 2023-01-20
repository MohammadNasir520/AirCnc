import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getRole } from '../api/userApi';
import Sidebar from '../Components/Dashboard/Sidebar';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(false)

    // fetching user role
    useEffect(() => {
        setLoading(true)
        getRole(user?.email)
            .then(data => {
                console.log(data);
                setRole(data)
                setLoading(false)
            })
    }, [user?.email])
    return (
        <div className='md:flex relative min-h-screen'>
            {
                loading ? <Spinner></Spinner>
                    :
                    <>
                        <Sidebar role={role}></Sidebar>
                        <div className='flex-1'>

                            <div className='p-5 md:ml-64'>
                                <Outlet></Outlet>
                            </div>

                        </div>
                    </>
            }
        </div>
    );
};

export default DashboardLayout;