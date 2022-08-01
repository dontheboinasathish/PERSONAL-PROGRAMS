
import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';
import deletepic from "../Images/delete_img.svg";
import { useState } from 'react';
import ModalAdd from '../shared/Modal';
import up_arrow from "../Images/up-arrow.svg"
import down_arrow from "../Images/down-arrow.svg"
import "../styles/Login.css";
import Lodash from 'lodash';


function Login(props) {
    //Modal Usestate
    const [isAdd, setIsAdd] = useState(true)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const list = useSelector((state) => state.Auth.arr)
    console.log(list);
    console.log("list login ki vachavaa raaa");
    const submit = () => {
        console.log("hello click unnava....");
        dispatch({
            type: "DATA_REQUEST"
        })
    }
    useEffect(() => {
        submit()
    }, [])

    const deleteFn = (value) => {
        console.log("value", value)
        const userdelet = list.filter((each) => each.id !== value.id)
        console.log(userdelet)
        dispatch({
            type: "DELETE_DATA_REQUEST",
            data: userdelet,
        })
    }
    const onUpArrow = () => {
        const sortedListup = Lodash.orderBy(list, ['name'], ['asc'])
        dispatch({
            type: "sorteditems",
            payload: sortedListup

        })
    }
    const onDownArrow = () => {
        const sortingdown = Lodash.orderBy(list, ['name'], ['desc']);
        dispatch({
            type: "descendingitems",
            payload: sortingdown
        })
    }
    return (
        <div>
            <ModalAdd />
            <>
                <input type="text" placeholder='searching....' />
            </>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className='posRel'>id <img src={up_arrow} alt="up_arrow" className="posAbs top1" onClick={onUpArrow} /> <img src={down_arrow} alt="down_arrow" className="posAbs bottom1" onClick={onDownArrow} /></th>
                        <th className='posRel'>email <img src={up_arrow} alt="up_arrow" className="posAbs top1" onClick={onUpArrow} /> <img src={down_arrow} alt="down_arrow" className="posAbs bottom1" onClick={onDownArrow} /></th>
                        <th className='posRel'>name <img src={up_arrow} alt="up_arrow" className="posAbs top1" onClick={onUpArrow} /> <img src={down_arrow} alt="down_arrow" className="posAbs bottom1" onClick={onDownArrow} /></th>
                        <th className='posRel'>Action <img src={up_arrow} alt="up_arrow" className="posAbs top1" onClick={onUpArrow} /> <img src={down_arrow} alt="down_arrow" className="posAbs bottom1" onClick={onDownArrow} /></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        list.map((each, index) => {
                            return (
                                <tr key={index}>
                                    <td>{each.id}</td>
                                    <td>{each.email}</td>
                                    <td>{each.name}</td>
                                    <td><ModalAdd /></td>
                                    <td> <img onClick={() => deleteFn(each)} src={deletepic} alt="img" className="mr2" /></td>
                                    {/* <td> <Button onClick={AddDetails}>ADD</Button>
                                    </td> */}

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {/* <Button onClick={submit}>submit</Button> */}
        </div>
    )
}

export default Login;