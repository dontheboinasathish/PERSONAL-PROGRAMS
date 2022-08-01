import { React, useState } from 'react'
import { Form } from 'react-bootstrap'
import "../styles/Login.css";
function Color() {
    return (
        <div className='container sasas'>
            <Form >
                <div>
                    <label>Filed1:
                        <input className='mb-3 rees' type="text" placeholder='filed1' ></input>
                    </label>
                </div>
                <div>
                    <label>Filed2:
                        <input className="sdsd" type="text" placeholder='filed2' ></input>
                    </label>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </div>
            </Form>
        </div>


    )
}

export default Color