import React, { useState, useEffect } from 'react';

function TaskTwo() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h1>Task Two</h1>
            <h2>Time: {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default TaskTwo;
