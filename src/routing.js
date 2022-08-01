import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amount from "./components/Amount";


import Color from "./components/Color";
import Fileds from "./components/Fileds";
import Login from "./components/Login";
import Mouse from "./components/Mouse";
import Subb from "./components/Table";
import Texttt from "./components/Texttt";
import Modal from "./shared/Modal";
import DeleteText from "../src/components/DeleteText"


function AppRouting() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/page" element={<Login />}></Route>
                    <Route path="/modal" element={<Modal />}></Route>
                    <Route path="/color" element={<Color />}></Route>
                    <Route path="/sum" element={<Mouse />}></Route>
                    <Route path="/Amount" element={<Amount />}></Route>
                    <Route path="/Field" element={<Fileds />}></Route>
                    <Route path="/text" element={<Texttt />}></Route>
                    <Route path="/data1" element={<Subb />}></Route>
                    <Route path="/trimm" element={<DeleteText />}></Route>






                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouting;