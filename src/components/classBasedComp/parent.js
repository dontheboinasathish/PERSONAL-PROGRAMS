import React, { Fragment } from "react";
import Employee from '../classBasedComp/employee';
// import '../../App.css';
import '../classBasedComp/classbase.css';

let ParentToChild = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <span>welcome to the component</span>
            </nav>
            <Employee name="cherry" age={25} />
            <Employee name="rahul" age={25} />
        </Fragment>
    )
}
export default ParentToChild;