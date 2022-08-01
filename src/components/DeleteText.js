import React, { useState } from "react";
function DeleteText() {

    const [state, setState] = useState({
        text: ''
    })
    const handlechange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value.trim() })
    }
    return (
        <div>
            <label for="password">password:</label>
            <input type="password" placeholder="password" name="text" value={state.text} onChange={handlechange} >
            </input>
            {
                state.text &&

                <p>{state.text}</p>}
        </div>
    )
}
export default DeleteText;