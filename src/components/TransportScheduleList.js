import React, { useState, useEffect } from 'react';
import TransportSchedule from './TransportSchedule';
import { scheduleData as initialScheduleData } from '../data/scheduleData';
import { generateRandomSchedule } from '../utils/utils';

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
            <h1>ебаное расписание ярославского транспорта би лайк</h1>
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
