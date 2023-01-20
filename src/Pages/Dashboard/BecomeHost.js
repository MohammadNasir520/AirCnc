import React, { useContext, useEffect, useState } from 'react';
import { getImageUrl } from '../../api/ImageUpload';
import { getRole, hostRequest } from '../../api/userApi';
import BecomeHostForm from '../../Components/Form/BecomeHostForm';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeHost = () => {
    const { user } = useContext(AuthContext)
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(false)
    console.log(role);
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

    const handleSubmit = event => {
        event.preventDefault()
        const location = event.target.location.value;
        const image = event.target.image.files[0]
        console.log(location, image);
        getImageUrl(image)
            .then(ImageUrl => {
                console.log(ImageUrl);
                const hostData = {
                    location: location,
                    documentIMG: ImageUrl,
                    role: 'requested',
                    email: user?.email,
                }
                console.log(hostData);
                hostRequest(hostData)
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            {
                loading ? <Spinner></Spinner>
                    : <>
                        {
                            role ? <div className='h-screen mx-auto flex justify-center  items-center  text-gray-700 text-xl'>requesed for host, Please wait for Admin approval</div>
                                :
                                <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>

                        }
                    </>
            }
        </div>
    );
};

export default BecomeHost;