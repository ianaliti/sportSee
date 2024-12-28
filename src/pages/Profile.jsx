import React, { useEffect, useState } from 'react'
import './Profile.css'
import { getAllUserData } from '../services/api';
import { useParams } from 'react-router-dom';
import AreaChartComponent from '../components/charts/AreaChart';
import ScoreBar from '../components/score_bar/ScoreBar'
import AverageTraining from '../components/average_training/AverageTraining';
import TrainingScore from '../components/training_score/TrainingScore';

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
            <h1>Bonjour, {userData.mainData.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='grid-container'>
                <div>
                    <AreaChartComponent activity={userData.activity.sessions} />
                    <div className='grid-charts'>
                        <AverageTraining sessions={userData.averageTraining.sessions} />
                        <TrainingScore score={userData.mainData.score}/>
                    </div>
                </div>
                <div>
                    <ScoreBar score={userData.mainData.keyData} />
                </div>

            </div>


        </div>
    );
}