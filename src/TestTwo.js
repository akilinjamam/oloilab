import React, { useState } from 'react';

const TestTwo = () => {

    const [number, setNumber] = useState(0)

    const [ok, setOk] = useState(true)




    const handleCycle = () => {

        console.log(ok)
        console.log(number)
        if (ok || !ok) {
            const total = number + 1;
            setNumber(total)
        }

        if (number === 2) {
            setNumber(0)
        }

    }
    return (
        <div>
            {number}

            <button onClick={() => handleCycle(setOk(!ok))}>cycle</button>
        </div>
    );
};

export default TestTwo;