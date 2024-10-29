import React from 'react';
import '../styles/TransportSchedule.css';

const TransportSchedule = ({ id, routeName, weekdays, weekends }) => {
    return (
        <div className="schedule-container">
            <h2>Маршрут №{id}</h2>
            <h2>{routeName}</h2>

            <div className="schedule-section">
                <div className="days">
                <h4>Рабочие дни</h4>
                    <div className="day">
                        <div className="times">
                            {weekdays.map((time, index) => (
                                <span key={index}>{time}</span>
                            ))}
                        </div>
                    </div>

                    {/* <div className="day">
                        <h4>Выходные дни</h4>
                        <div className="times">
                            {weekends.map((time, index) => (
                                <span key={index}>{time}</span>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default TransportSchedule;
