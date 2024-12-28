import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../sportsee-backend/app/data';

export const fetchUserMainData = async (userId) => {
    const user = USER_MAIN_DATA.find(user => user.id === Number(userId));
    if (!user) throw new Error('User not found');
    return user;
};

export const fetchUserActivity = async (userId) => {
    const userActivity = USER_ACTIVITY.find(user => user.userId === Number(userId));
    if (!userActivity) throw new Error('User activity not found');
    return userActivity;
}

export const fetchUserAverageTraining = async (userId) => {
    const userTraining = USER_AVERAGE_SESSIONS.find(user => user.userId === Number(userId));
    if(!userTraining) throw new Error('User average training time not found');
    return userTraining;
}

export const getAllUserData = async (userId) => {
    try {
        const [mainData, activity, averageTraining] = await Promise.all([
            fetchUserMainData(userId),
            fetchUserActivity(userId),
            fetchUserAverageTraining(userId)
        ])
        return {
            mainData,
            activity,
            averageTraining
        }
    } catch (error) {
        throw error;
    }
    
};