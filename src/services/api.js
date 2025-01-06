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
    const sessions = USER_AVERAGE_SESSIONS.find(user => user.userId === Number(userId));
    if(!sessions) throw new Error('User average training time not found');
    return sessions;
}

export const fetchUserPerfomance = async (userId) => {
    const perfomance = USER_PERFORMANCE.find(user => user.userId === Number(userId));
    if(!perfomance) throw new Error('User perfomance not found');
    return perfomance;
}

export const getAllUserData = async (userId) => {
    try {
        const [mainData, activity, sessions, perfomance] = await Promise.all([
            fetchUserMainData(userId),
            fetchUserActivity(userId),
            fetchUserAverageTraining(userId),
            fetchUserPerfomance(userId)
        ])
        return {
            mainData,
            activity,
            sessions,
            perfomance
        }
    } catch (error) {
        throw error;
    }
    
};