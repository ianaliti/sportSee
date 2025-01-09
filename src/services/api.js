import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../sportsee-backend/app/data';
import UserDataModel from "./models/UserDataModel";

export const fetchUserMainData = async (userId) => {
    try {
        const userData = USER_MAIN_DATA.find(user => user.id === Number(userId));
        if (!userData) throw new Error('User not found');
        return new UserDataModel(userData);
    } catch (error) {
        throw new Error(`Error fetching user data: ${error.message}`);
    }
};

export const fetchUserActivity = async (userId) => {
    try {
        const activity = USER_ACTIVITY.find(item => item.userId === Number(userId));
        if (!activity) throw new Error('Activity not found');
        return UserDataModel.formatActivity(activity);
    } catch (error) {
        throw new Error(`Error fetching activity data: ${error.message}`);
    }
};

export const fetchUserAverageSessions = async (userId) => {
    try {
        const sessions = USER_AVERAGE_SESSIONS.find(item => item.userId === Number(userId));
        if (!sessions) throw new Error('Sessions not found');
        return UserDataModel.formatAverageSessions(sessions);
    } catch (error) {
        throw new Error(`Error fetching sessions data: ${error.message}`);
    }
};

export const fetchUserPerformance = async (userId) => {
    try {
        const performance = USER_PERFORMANCE.find(item => item.userId === Number(userId));
        if (!performance) throw new Error('Performance not found');
        return UserDataModel.formatPerformance(performance);
    } catch (error) {
        throw new Error(`Error fetching performance data: ${error.message}`);
    }
};

export const getAllUserData = async (userId) => {
    try {
        const [mainData, activity, sessions, performance] = await Promise.all([
            fetchUserMainData(userId),
            fetchUserActivity(userId),
            fetchUserAverageSessions(userId),
            fetchUserPerformance(userId)
        ]);

        return {
            mainData,
            activity,
            sessions,
            performance
        };
    } catch (error) {
        throw error;
    }
};