export function generateRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    return `${hours}:${minutes}`;
}

export function generateRandomSchedule(numTimes = 20) {
    const schedule = [];
    for (let i = 0; i < numTimes; i++) {
        schedule.push(generateRandomTime());
    }
    return schedule;
}