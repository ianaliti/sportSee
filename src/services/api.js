import {
    getUserMain,
    getUserActivity,
    getUserAverageSession,
    getUserPerformance
} from './mockData.js';
import UserDataModel from './models/UserDataModel.js';

const BASE_URL = 'http://localhost:3000'

export const fetchUserMainData = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        return new UserDataModel(data.data);
    } catch (error) {
        console.error(`Error fetching user data: ${error.message}`);
        const { data } = await getUserMain(userId);
        return new UserDataModel(data);
    }
};

export const fetchUserActivity = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error('Activity not found');
        }
        const data = await response.json();
        return UserDataModel.formatActivity(data.data);;
    } catch (error) {
        console.error(`Error fetching activity data: ${error.message}`);
        const { data } = await getUserActivity(userId);
        return UserDataModel.formatActivity(data);
    }
};

export const fetchUserAverageSessions = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error('Sessions not found');
        }
        const data = await response.json();
        return UserDataModel.formatAverageSessions(data.data);
    } catch (error) {
        console.error(`Error fetching average-session data: ${error.message}`);
        const { data } = await getUserAverageSession(userId);
        return UserDataModel.formatAverageSessions(data);
    }
};

export const fetchUserPerformance = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error("Performance not found");
        }
        const data = await response.json();
        return UserDataModel.formatPerformance(data.data);
    } catch (error) {
        console.error(`Error fetching performance data from server: ${error.message}`);
        const { data } = await getUserPerformance(userId);
        return UserDataModel.formatPerformance(data);
    }
};

export const getAllUserData = async (userId) => {
    try {
        const [mainData, activity, sessions, performance] = await Promise.all([
            fetchUserMainData(userId),
            fetchUserActivity(userId),
            fetchUserAverageSessions(userId),
            fetchUserPerformance(userId),
        ]);

        return {
            mainData,
            activity,
            sessions,
            performance,
        };
    } catch (error) {
        console.error(`Error fetching all user data: ${error.message}`);
        throw error;
    }
};