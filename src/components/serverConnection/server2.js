import React, { Fragment, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import UserServices from '../serverConnection/userServer2';

let Server1 = () => {
    const [state, setState] = useState({
        user: []
    });
    useEffect(() => {

        UserServices.getAllUsers().then((responce) => {

            console.log(responce.data);

            setState(() => ({
                user: responce.data
            }))
        }).catch((error) => {
            console.log(error);
        })

        // setState(()=>({
        //     user:UserServices.getAllUsers() 
        // }))

    }, [])

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">userlist</p>
                        <p >these are the list</p>

                    </div>
                </div>
            </div>

            {/* <h2>welcome to fragment</h2>
            <pre>{JSON.stringify(state.user)}</pre> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>welcome to fragment</h2>
                        {/* <pre>{JSON.stringify(state.user)}</pre> */}

                        <table className="table table-hover text-center table-striped">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>S.NO</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>STREET</th>
                                    <th>CITY</th>
                                    <th>WEBSITE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.user.length > 0 &&
                                    state.user.map(each => {
                                        return (
                                            <tr key={each.id}>
                                                <td>{each.id}</td>
                                                <td>{each.name}</td>
                                                <td>{each.email}</td>
                                                <td>{each.address.street}</td>
                                                <td>{each.address.city}</td>
                                                <td>{each.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Server1;