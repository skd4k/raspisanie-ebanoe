import React, { useState, useEffect } from 'react';
import TransportSchedule from './TransportSchedule';
import { scheduleData as initialScheduleData } from '../data/scheduleData';
import { generateRandomSchedule } from '../utils/utils';

import { Typography } from "antd";
const { Title, Text } = Typography;

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}

const TransportScheduleList = () => {
    const [scheduleData, setScheduleData] = useState(initialScheduleData);

    const updateRandomTimes = () => {
        const newScheduleData = scheduleData.map(schedule => ({
            ...schedule,
            weekdays: generateRandomSchedule(schedule.weekdays.length),
            // weekends: generateRandomSchedule(schedule.weekends.length),
        }));
        setScheduleData(newScheduleData);
    };

    const debouncedUpdateRandomTimes = debounce(updateRandomTimes, 200);

    useEffect(() => {
        const handleScroll = () => {
            debouncedUpdateRandomTimes();
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scheduleData]);

    return (
        <div>
            <Title style={{ textAlign:'center', marginBottom: '30px' }}>ебаное расписание ярославского транспорта би лайк</Title>
            {scheduleData.map((schedule) => (
                <TransportSchedule
                    id={schedule.id}
                    routeName={schedule.routeName}
                    weekdays={schedule.weekdays}
                    weekends={schedule.weekends}
                />
            ))}
        </div>
    );
};

export default TransportScheduleList;
