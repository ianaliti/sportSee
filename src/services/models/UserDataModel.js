class UserDataModel {
    constructor(rawData) {
        if (!rawData) throw new Error('Data is required');
        
        this.id = rawData.id;
        this.userInfos = rawData.userInfos;
        this.todayScore = rawData.todayScore;
        this.keyData = this.formatKeyData(rawData.keyData);
    }

    formatKeyData(keyData) {
        if (!keyData) return null;
        
        return {
            calories: {
                value: keyData.calorieCount,
                unit: 'kCal'
            },
            protein: {
                value: keyData.proteinCount,
                unit: 'g'
            },
            carbs: {
                value: keyData.carbohydrateCount,
                unit: 'g'
            },
            fat: {
                value: keyData.lipidCount,
                unit: 'g'
            }
        };
    }

    static formatActivity(rawActivity) {
        if (!rawActivity) throw new Error('Activity data is required');
        
        return {
            userId: rawActivity.userId,
            sessions: rawActivity.sessions.map(session => ({
                day: session.day,
                kilogram: session.kilogram,
                calories: session.calories
            }))
        };
    }

    static formatAverageSessions(rawSessions) {
        if (!rawSessions) throw new Error('Sessions data is required');
        
        const daysMap = {
            1: 'L',
            2: 'M',
            3: 'M',
            4: 'J',
            5: 'V',
            6: 'S',
            7: 'D'
        };

        return {
            userId: rawSessions.userId,
            sessions: rawSessions.sessions.map(session => ({
                day: daysMap[session.day],
                length: session.sessionLength
            }))
        };
    }

    static formatPerformance(rawPerformance) {
        if (!rawPerformance) throw new Error('Performance data is required');

        const formattedData = rawPerformance.data.map(item => ({
            value: item.value,
            kind: rawPerformance.kind[item.kind]
        }));

        // Specific order for radar chart
        const orderedKinds = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio'];
        const orderedData = orderedKinds.map(kind => 
            formattedData.find(item => item.kind === kind)
        );

        return {
            userId: rawPerformance.userId,
            data: orderedData
        };
    }
}

export default UserDataModel;