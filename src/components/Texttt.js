import React, { useState } from 'react'

function Texttt() {

    const [state, setState] = useState({
        text: '',
        displaytext: ''
    }
    )
    const handlechange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, displaytext: '' })
    }
    const { text, displaytext } = state
    const submitFn = (e) => {
        e.preventDefault()
        const notaNumber = isNaN(state.text)
        if (state.text) {
            if (notaNumber) {
                setState({ ...state, displaytext: "enter text is string:" })
            }
            else {
                setState({ ...state, displaytext: "enter text is number :" })
            }

        } else {
            setState({ ...state, displaytext: " please enter text:" })
        }
    }

    return (
        <div>
            <div className='container '>
                <label for="name">name:</label>
                <input type="text" name="text" onChange={handlechange} value={state.text} placeholder='enter text'></input>
            </div>
            <div>
                <button onClick={submitFn}>Submit</button>

            </div>
            {
                state.displaytext ? <p>{displaytext}{text}</p> : null
            }
        </div>
    )
}



export default Texttt