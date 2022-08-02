import React from "react";
import { useState } from 'react'


let Student = () => {
    let [state, Setstate] = useState({
        students: [{
            name: "john",
            course: "BTech"
        },
        {
            name: "laura",
            course: "MBBS"
        }

        ]
    })

    let { students } = state;
    return (
        <React.Fragment>
            {/* <h2>Welcome to the student</h2> */}
            <div className="card">
                <div className="card-body">
                    <span>Name:{students[0].name}</span><br />
                    <span>Course:{students[0].course}</span>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <span>Name:{students[1].name}</span><br />
                    <span>Course:{students[1].course}</span>
                </div>
            </div>
        </React.Fragment>

    )
};
export default Student;