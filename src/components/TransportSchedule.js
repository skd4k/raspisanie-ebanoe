import { useState } from 'react';
import { Typography, Card, Row, Col } from "antd";
import '../styles/TransportSchedule.css';
import { generateRandomSchedule } from '../utils/utils';
const { Title, Text } = Typography;

const TransportSchedule = ({ id, routeName }) => {
    const now = new Date();

    // Инициализация расписаний
    const weekdays = generateRandomSchedule(93);
    const weekends = generateRandomSchedule(93);

    // Проверка на неактуальное время
    const isTimeInactive = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const timeDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        return timeDate < now;
    };

    // Переключение видимости расписания
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="schedule-container">
            <Title level={3} style={{ cursor: 'pointer', textAlign: 'center', marginTop: '5px' }} onClick={toggleExpand}>
                Маршрут №{id} - {routeName}
            </Title>

            {isExpanded && (
                <div>
                    <Card className="schedule-section" title={<Title level={5}>Рабочие дни:</Title>}>
                        <Row gutter={[8, 8]}>
                            {weekdays.map((time, index) => (
                                <Col
                                    key={index}
                                    xs={6} sm={4} md={2} lg={2} xl={2} // Установка адаптивных значений
                                >
                                    <Text
                                        strong
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
                                <Col
                                    key={index}
                                    xs={6} sm={4} md={2} lg={2} xl={2} // Установка адаптивных значений
                                >
                                    <Text
                                        strong
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
