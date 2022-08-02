import React, { useEffect, useState } from 'react'
let Digitalwatch = () => {
    let [state, setState] = useState({
        currentTime: new Date().toLocaleTimeString()
    });
    useEffect(() => {
        let interval = setInterval(() => {
            setState(() => ({
                currentTime: new Date().toLocaleTimeString()
            }))
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <React.Fragment>
            <div className='container mt-3 w-25'>
                <div className='card shadow-lg text-center'>
                    <div className='card-header bg-warning'>
                        <p className='h4'> Digital Watch </p>
                    </div>
                    <div>
                        <h3> {state.currentTime} </h3>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Digitalwatch;