import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../sportsee-backend/app/data';
import UserDataModel from "./models/UserDataModel";

const BASE_URL = 'http://localhost:5173'

export const fetchUserMainData = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        return new UserDataModel(data);
    } catch (error) {
        console.warn(`Error fetching user data: ${error.message}`);
        const mockData = USER_MAIN_DATA.find((user) => user.id === Number(userId));
        if (!mockData) throw new Error('Mock user data not found');
        return new UserDataModel(mockData);
    }
};

export const fetchUserActivity = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) throw new Error('Activity not found');
        const data = await response.json()
        return UserDataModel.formatActivity(data);
    } catch (error) {
        console.warn(`Error fetching activity data: ${error.message}`);
        const mockData = USER_ACTIVITY.find((user) => user.userId === Number(userId));
        if (!mockData) throw new Error('Mock user data not found');
        return UserDataModel.formatActivity(mockData);
    }
};

export const fetchUserAverageSessions = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/sessions`);
        if (!response.ok) throw new Error('Sessions not found');
        const data = await response.json();
        return UserDataModel.formatAverageSessions(data);
    } catch (error) {
         console.warn(`Error fetching sessions data: ${error.message}`);
        const mockData = USER_AVERAGE_SESSIONS.find((user) => user.userId === Number(userId));
        if (!mockData) throw new Error('Mock user data not found');
        return UserDataModel.formatAverageSessions(mockData);
    }
};

export const fetchUserPerformance = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) throw new Error("Performance not found");
        const data = await response.json();
        return UserDataModel.formatPerformance(data);
    } catch (error) {
        console.warn(`Error fetching performance data from server: ${error.message}`);
        const mockData = USER_PERFORMANCE.find((user) => user.userId === Number(userId));
        if (!mockData) throw new Error("Mock performance data not found");
        return UserDataModel.formatPerformance(mockData);
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
        throw new Error(`Error fetching all user data: ${error.message}`);
    }
};