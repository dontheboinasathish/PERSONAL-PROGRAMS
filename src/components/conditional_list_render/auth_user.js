import React, { useState } from 'react'

const AuthUser = () => {
    const [state, setState] = useState({
        isLoggedIn: false
    })

    const logIn = () => {
        setState(() => ({
            isLoggedIn: true
        }))
    }
    const logOut = () => {
        setState(() => ({
            isLoggedIn: false
        }))
    }

    return (
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card shadow-lg'>
                            <div className='card-body'>
                                {
                                    state.isLoggedIn ? <p className='h3'> <i>Welcome Mr.Sathish YAdav!</i></p>
                                        : <p className='h3'>Welcome Guest!</p>
                                }
                                {
                                    state.isLoggedIn ? <button onClick={logOut} className='btn btn-warning btn-sm'>LogOut</button>
                                        : <button onClick={logIn} className='btn btn-success btn-sm'>Login</button>

                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AuthUser;