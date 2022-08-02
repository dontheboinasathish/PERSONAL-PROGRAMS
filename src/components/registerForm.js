import React, { useState } from "react";

const RegisterForm = () => {
    const [state, setState] = useState({
        user: {
            username: "",
            email: "",
            password: "",
            designation: "",
            bio: "",
            terms: false

        }
    })
    const { user } = state;
    const InputChange = (e) => {
        const name = [e.target.name]
        const value = e.target.value;
        user[name] = value;
        setState({ ...state, user: user })
        // setState(value(state))=> ({
        //     user: {
        //         ...state.user,
        //         [e.target.name]: e.target.value

        //     }
        // })
    }
    console.log("user", user)
    const updateCheck = (e) => {
        const name = [e.target.name]
        const value = e.target.checked;
        user[name] = value;
        setState({ ...state, user: user })

    }

    const submitRegister = (e) => {
        e.preventDefaullt();


    }

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.user)}</pre> */}
            <div >
                <p className="h4">REGISTER HERE</p>
            </div>
            <form onSubmit={submitRegister}>
                <div>
                    <input type="text" name="username" value={user.username} className="form-control" placeholder="User name" onChange={InputChange} />
                </div>
                <div>
                    <input type="email" name="email" value={user.email} className="form-control" placeholder="Email" onChange={InputChange} />
                </div>
                <div>
                    <input type="text" name="password" value={user.password} className="form-control" placeholder="Password" onChange={InputChange} />
                </div>
                <div>
                    <select className="form-control" name="designation" value={user.designation} onChange={InputChange}>
                        <option value="">Select Designation</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Sr.Software Engineer">Sr.Software Engineer</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Director">Director</option>
                    </select>
                </div>
                <div>
                    <textarea rows={5} name="bio" value={user.bio} className="form-control" placeholder="Bio" onChange={InputChange} />

                </div>
                <div>
                    <input type="checkbox" name="terms" className="form-check-input" onChange={updateCheck} />Accept Terms
                </div>
                <div>
                    <input type="submit" className="btn btn-warning btn-sm" value="Register" />
                </div>

            </form>

        </React.Fragment>
    )
}
export default RegisterForm;