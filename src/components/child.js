import React from "react";
function Child(props) {
    // const { data } = props;
    return (
        <div>

            <div className="p-3 mb-2 bg-warning text-dark">
                <h3>child component</h3>
                <h5>{props.data}</h5>
            </div >

        </div>
    )
}
export default Child;