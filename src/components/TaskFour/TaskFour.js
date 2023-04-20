import React, { useState, useEffect } from 'react';

function TaskFour() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component updated');
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Task 3, Task 4</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default TaskFour;
