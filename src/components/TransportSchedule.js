import React from 'react';
import '../styles/TransportSchedule.css';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Text } = Typography;

const TransportSchedule = ({ id, routeName, weekdays, weekends }) => {
    // Текущая дата и время
    const now = new Date();

    // Проверка на неактуальное время
    const isTimeInactive = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const timeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        return timeDate < now;
    };

    return (
        <div className="schedule-container">
            <Title level={3} style={{marginTop: '5px', textAlign: 'center'}}>Маршрут №{id}</Title>
            <Title level={4} style={{textAlign: 'center', marginTop: '-15px'}}>{routeName}</Title>

            <div>
                <Card className="schedule-section" title={<Title style={{ marginTop: '0' }} level={5}>Рабочие дни</Title>}>
                    <Row gutter={[8, 8]}>
                        {weekdays.map((time, index) => (
                            <Col key={index} span={4}> {/* 6 столбцов */}
                                <Text 
                                strong 
                                className={isTimeInactive(time) ? 'inactive' : ''}
                                style={{ 
                                    display: 'block',
                                        color: isTimeInactive(time) ? '#777' : '#fff',
                                        backgroundColor: isTimeInactive(time) ? '#d3d3d3' : '#1e88e5',
                                        padding: '6px 0',
                                        borderRadius: '4px',
                                        textAlign: 'center',
                                        textDecoration: isTimeInactive(time) ? 'line-through' : 'none'
                                }}>
                                    {time}
                                </Text>
                            </Col>
                        ))}
                    </Row>
                </Card>

                {/* Карточка для выходных дней */}
                {/* <Card className="schedule-section" title={<Title level={5}>Выходные дни</Title>}>
                    <Row gutter={[8, 8]}>
                        {weekends.map((time, index) => (
                            <Col key={index} span={4}>
                                <Text strong style={{ display: 'block', color: '#fff', backgroundColor: '#ffb74d', padding: '6px 0', borderRadius: '4px', textAlign: 'center' }}>
                                    {time}
                                </Text>
                            </Col>
                        ))}
                    </Row>
                </Card> */}
            </div>
        </div>
    );
};

export default TransportSchedule;
