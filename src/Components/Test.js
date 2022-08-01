import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
function Test() {

    const dispatch = useDispatch()
    const output = useSelector((state) => state.Auth)
    console.log(output);
    const handeleFn1 = () => {
        dispatch({
            type: "FIRST_REQUEST"

        })
    }
    const handeleFn2 = () => {
        dispatch({
            type: "SECOND_REQUEST"

        })

    }
    const handeleFn3 = () => {
        dispatch({
            type: "THIRD_REQUEST"

        })

    }
    const handeleFn4 = () => {
        dispatch({
            type: "FOURTH_REQUEST"

        })

    }
    return (
        <div>
            <Button onClick={handeleFn1}>FirstButton</Button>
            <Button onClick={handeleFn2}>FirstButton2</Button>
            <Button onClick={handeleFn3}>FirstButton3</Button>
            <Button onClick={handeleFn4}>FirstButton4</Button>
        </div>

    )
}

export default Test