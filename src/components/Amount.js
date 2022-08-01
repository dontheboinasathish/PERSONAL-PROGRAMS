import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function Amount() {

    const [state, setState] = useState({
        currencyvalue: '',
        rupee: 10,
        totalAmount: ''
    })
    const handleChange = (e) => {
        console.log("valueeds")
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const allowOnlyNumbers = (evt) => {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        console.log(charCode)
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            evt.preventDefault()
    }

    const SubFn = (e) => {
        e.preventDefault()
        console.log("heloo submit")
        const indianrupee = Number(state.currencyvalue) * Number(state.rupee)
        setState({ ...state, totalAmount: indianrupee })
    }

    const clearFn = (e) => {
        e.preventDefault()

        setState({ ...state, currencyvalue: '', rupee: '' })
    }

    return (
        <Form>
            <label>AMOUNT$:
                <input type="text" name='currencyvalue' value={state.currencyvalue} onChange={handleChange} onKeyPress={allowOnlyNumbers}></input>
            </label>
            <p>{state.totalAmount}</p>
            <button onClick={SubFn}>Submit</button>
            <button onClick={clearFn}>Clear</button>

        </Form>
    )
}

export default Amount