import { React, useState } from 'react'
import { Form } from 'react-bootstrap'
import "../styles/Login.css";
import person from "../Images/person.svg"
import mail from "../Images/mail.svg"
import cancel from "../Images/cancel.svg"
import check from "../Images/check.svg"
import lock from "../Images/lock.svg"

function Fileds() {

    const [state, setState] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const handlechange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value, error: '' })
    }


    return (
        <div>
            <Form container>
                <div className='posRel'>
                    <label> First Name:</label>
                    <img className='posAbs' src={person} alt="fname" />

                    <input className='lenth1' type="text" name="fname" onChange={handlechange} value={state.fname} />
                </div>
                <div className='posRel'>
                    <label> Last Name:</label>
                    <img className='posAbs' src={person} alt="fname" />

                    <input className="lenth2" type="text" name="lname" onChange={handlechange} value={state.lname} disabled={!state.fname} />
                </div>
                <div>
                    <label> Email:  </label>
                    <img className='posAbs' src={mail} alt="fname" />
                    <input className="lenth3" type="text" name="email" onChange={handlechange} value={state.email} disabled={!state.lname} />
                </div>
                <div>
                    <label>  Password: </label>
                    <img className='posAbs' src={lock} alt="fname" />
                    <input className="lenth4" type="text" name="password" onChange={handlechange} value={state.password} disabled={!state.email} />

                </div>
                <div>
                    <label> ConformPassword: </label>
                    <input className="lenth5" type="text" name="cpassword" onChange={handlechange} value={state.cpassword} disabled={!state.password} />

                    {
                        (state.password && state.cpassword) && (state.password === state.cpassword) ? <img src={check} alt="correct"></img> : <img src={cancel} alt="wrong"></img>
                    }
                </div>

            </Form>

        </div>
    )
}

export default Fileds