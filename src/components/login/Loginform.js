import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './Login.css';


function Loginform() {

    const [state, setState] = useState({
        username: '',
        password: '',

    });

    const handleOnInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const onSubmitLogin = (e) => {
        e.preventDefault();
        setState({
            ...state, username: '',
            password: '',
        
        })
        console.log(state);
        <pre>{JSON.stringify(state)}</pre>
    }
    return (
        <React.Fragment>

            <div className="card-main ">
                <h4>Login from</h4>
                <form onSubmit={onSubmitLogin}>
                    <div>

                        <input type="text" name="username" value={state.username} onChange={handleOnInput} className='form-control' placeholder='username'></input>
                    </div>
                    <div>
                        <input type="password" value={state.password} name="password" className='form-control' placeholder='password' onChange={handleOnInput} ></input>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-success" value="login" >submit</button>
                    </div>
                </form>
            </div>


        </React.Fragment>
    )

}

export default Loginform;