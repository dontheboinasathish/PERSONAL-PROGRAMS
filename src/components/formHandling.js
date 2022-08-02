import React,{useState} from 'react'

const FormHandling = () => {
    let [state,setState]= useState( {
        username:'john'
    });
    let updateInput = (e) => {
        setState((state)=>({
         username: e.target.value
        }));
    }
    return (
        <React.Fragment>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <p className='h4'>User Name</p>

                            </div>
                            <div className='card-body mt-3 bg-light'>
                                <form>
                                    <div className='mb-3'>

                                        <input value={state.username} type="text" className='form-control'  onChange={updateInput}/>
                                    </div>
                                    <h4>{state.username}</h4>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormHandling