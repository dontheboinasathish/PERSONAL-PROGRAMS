import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./Components/Test";

function AppRouting() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/test" element={<Test />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting;