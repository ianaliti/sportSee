import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../sportsee-backend/app/data';

export const fetchUserMainData = async (userId) => {
    const user = USER_MAIN_DATA.find(user => user.id === Number(userId));
    if (!user) throw new Error('User not found');
    return user;
};

export const fetchUserActivity = async (userId) => {
    const userActivity = USER_ACTIVITY.find(user => user.id === Number(userId))
    if(!user) throw new Error('User activity not found')
    return userActivity
}

export const getAllUserData = async (userId) => {
    const mainData = await fetchUserMainData(userId);
    return mainData;
};