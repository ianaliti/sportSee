import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getAllUserData } from '../services/api';
import { useParams } from 'react-router-dom';
import AreaChartComponent from '../components/charts/activity/AreaChart';
import ScoreBar from '../components/score_bar/ScoreBar'
import AverageTraining from '../components/charts/sessions/UserSessions';
import UserKPI from '../components/charts/kpi/UserKPI';
import UserPerfomance from '../components/charts/perfomance/UserPerfomance';


export default function Profile() {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const { userId } = useParams();

    // console.log(userId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cleanUserId = userId.replace(':', '')
                const data = await getAllUserData(cleanUserId);            
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


    return (
        <div className='profile'>
            <div className='user-greeting'>
                Bonjour <span className='user-name'>{userData.mainData.userInfos.firstName}</span>
            </div>
            <p className='p-main'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='grid-container'>
                <div className='main-container'>
                    <AreaChartComponent activity={userData.activity.sessions} />
                    <div className='grid-charts'>
                        <AverageTraining sessions={userData.sessions.sessions} />
                        <UserPerfomance performance={userData.performance.data}  />
                        <UserKPI score={userData.mainData.todayScore}/>
                    </div>
                </div>
                <div className='sidebar'>
                    <ScoreBar score={userData.mainData.keyData} />
                </div>

            </div>


        </div>
    );
}