import React, { useState } from "react";
import ChildProperties from "../components/child";
function Parent() {
    const [state, setState] = useState({
        companyname: "SY COMPANY",
    })
    return (
        <div>
            <div className="p-3 mb-2 bg-success text-white">
                <h3>parent component</h3>
                {/* <h5>{state.companyname}</h5> */}
                <ChildProperties data={state.companyname} />
            </div >
        </div>
    )
}
export default Parent;