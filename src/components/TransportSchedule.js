import { useState } from 'react';
import { Typography, Card, Row, Col } from "antd";
import '../styles/TransportSchedule.css'
const { Title, Text } = Typography;

const TransportSchedule = ({ id, routeName, weekdays = [], weekends = [] }) => {
    // Текущая дата и время
    const now = new Date();

    // Проверка на неактуальное время
    const isTimeInactive = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const timeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        return timeDate < now;
    };

    // Состояние для раскрытия/сворачивания
    const [isExpanded, setIsExpanded] = useState(false);

    // Обработчик клика для раскрытия/сворачивания
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="schedule-container">
            <Title 
                level={3} 
                style={{ cursor: 'pointer', textAlign: 'center', marginTop: '5px' }} 
                onClick={toggleExpand} 
            >
                Маршрут №{id} - {routeName}
            </Title>

            {isExpanded && (
                <div>
                    <Card className="schedule-section" title={<Title level={5}>Рабочие дни:</Title>}>
                        <Row gutter={[8, 8]}>
                            {weekdays.map((time, index) => (
                                <Col key={index} span={4}>
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
                                        }}
                                    >
                                        {time}
                                    </Text>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                    <Card className="schedule-section" title={<Title level={5}>Выходные дни:</Title>}>
                        <Row gutter={[8, 8]}>
                            {weekends.map((time, index) => (
                                <Col key={index} span={4}>
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
                                        }}
                                    >
                                        {time}
                                    </Text>
                                </Col>
                            ))}
                        </Row>
                    </Card>
                </div>
            )}
        </div>
    );
};


export default TransportSchedule;
