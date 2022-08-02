import React, { Fragment } from "react";
import CountryCard from "./CountryCard";
import './BcardDesign.css';

function Bcard() {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React with bootstrap styles</a>

            </nav>
            <CountryCard />
        </Fragment>

    )
}
export default Bcard;