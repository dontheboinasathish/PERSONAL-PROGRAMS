import React, { useState } from 'react'
import img from '../image/download .jpg'

function EventHandel() {
    const [product, setProduct] = useState({
        Sno: "1Azxx",
        image: { img },
        name: 'Watch',
        price: 1200,
        qty: 0,
        total: 1200

    })
    let [count, setCount] = useState(0)
    let [message, setMessage] = useState('Hi')
    // let counter = 0
    let { total } = product
    const increment = () => {
        total = total + 1200
        setProduct({ ...product, total })

        count++
        setCount(count)
    }
    const decrement = () => {
        count--
        total = total - 1200 == 0 ? 1200 : total = total - 1200
        setProduct({ ...product, total })
        setCount(count)
    }
    const gm = (value) => {
        setMessage(value)
    }

    return (
        <div>
            <h1>
                Counter
            </h1>
            <button className="btn btn-primary" onClick={increment}>
                Increment
            </button>
            <h1>{count}</h1>
            <button className="btn btn-danger" onClick={decrement}>Decrement</button>
            <div >
                <h1>Wish </h1>

                <h1>{message}</h1>
                <button className="btn btn-primary" onClick={() => gm("Good Morning")}>Good Morning</button>
                <button className="btn btn-danger" onClick={() => gm("Good Afternoon")}>Good Afternoon</button>
                <button class="btn btn-success" onClick={() => gm("Good Evening")}>Good Evening</button>

            </div>
            <div>
                <h1>Prodect Iteams</h1>

            </div>
            <div>
                <table class="table table-dark">
                    <thead >
                        <tr>
                            <th>Sno</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.Sno}</td>
                            <td><img src={product.img} alt='watch' /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button></td>
                            <td>{product.total}</td>



                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EventHandel;