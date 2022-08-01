import React, { useState } from 'react'

function Subb() {

    const [state, setState] = useState(
        {
            data: '',
            list: [],
            search: ''
        }
    )
    const { list, data, search } = state;

    const handleFn = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submitFn = (e) => {
        e.preventDefault();
        list.push(state.data)
        console.log("list", list)
        setState({ ...state, list: list })
        setState({ ...state, data: '' })

    }
    return (
        <div>
            <input type="text" onChange={handleFn} name="data" value={state.data}></input>
            <button onClick={submitFn}>Submit</button>
            <div>
                <label for="search">Search:</label>
                <input
                    type="text"
                    name='search'
                    value={search}
                    onChange={handleFn}
                    placeholder={'Enter any text'}
                />
            </div>
            <table class="table table-dark">
                <thead class="thead-light">
                    <th>id</th>
                    <th>name</th>
                </thead>
                <tbody>
                    {
                        list &&
                        list.filter(each => each.toLowerCase().includes(search.toLowerCase()))
                            .map((each, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{each}</td>
                                    </tr>
                                )
                            }

                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Subb;