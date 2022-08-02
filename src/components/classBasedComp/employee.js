import React from "react";
class Employee extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {/* <h2>welcome to the employee component</h2> */}
                <div className="card-body1 ">
                    <h2>welcome {this.props.name}</h2>
                    <h2>age: {this.props.age} yrs</h2>
                </div>
            </React.Fragment>
        );
    }
}
export default Employee;