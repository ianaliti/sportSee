import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getAllUserData } from '../services/api';
import { useParams } from 'react-router-dom';

export default function Profile() {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
             const cleanUserId = userId.replace(':', '')
             const data = await getAllUserData(cleanUserId)
             setUserData(data)
            } catch (error) {
                setError(error.message);
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [userId]);

    if (error) return <div>Error: {error}</div>;
    if (!userData) return <div>Loading...</div>;

    console.log(userData)

    return (
        <div className='profile'>
            {userData.userInfos?.firstName && (
                <h1>{userData.userInfos.firstName}</h1>
            )}
            <h2>Hi</h2>
        </div>
    );
}