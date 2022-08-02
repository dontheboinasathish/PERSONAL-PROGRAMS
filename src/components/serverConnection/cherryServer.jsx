import React,{Fragment} from "react";
import Server1 from '../serverConnection/server2';
let CherryServer=()=>
{
    return(
        <Fragment>
            <nav className="navbar navber-dark  navbar-expand-sm">
                <a href="/" className="navbar-brand">react charan</a>

            </nav>
            <Server1/>

        </Fragment>
    )
}
export default CherryServer;