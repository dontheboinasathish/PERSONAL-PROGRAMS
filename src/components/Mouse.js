import React, { useState } from 'react'
import { Form } from 'react-bootstrap'


function Mouse() {
    const [bgcolor, setBgColor] = useState({
        color: {
            backgroundField1: '',
            backgroundField2: ''

        }
    })

    // setUpload({ ...upload, fileupload: e.target.files[0], error: " " })
    const colorChange = (e) => {
        {
            setBgColor({ ...bgcolor, backgroundField1: e.target.style.background = 'yellow' })
        }
    }
    const handlecolorChange = (e) => {
        setBgColor({ ...bgcolor, backgroundField2: e.target.style.background = 'cyan' })

    }

    const clearmouse = (e) => {
        setBgColor({ ...bgcolor, backgroundField1: e.target.style.background = '' })
    }
    return (

        <div className='card'>
            <Form>
                <div className='container  '>
                    <label>Filed1:
                        <input onMouseOver={colorChange} onMouseLeave={clearmouse} type="text" placeholder='filed1' ></input>
                    </label>
                </div>
                <div className='container'>
                    <label>Filed2:
                        <input type="text" onMouseOver={handlecolorChange} onMouseLeave={clearmouse} placeholder='filed2' ></input>
                    </label>

                </div>
            </Form >
        </div>


    )
}

export default Mouse;