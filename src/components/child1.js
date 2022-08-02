import React, { useState } from 'react'

const Child1 = (props) => {
    let[state,setState]= useState({
        author:'NAVEEN SAGGAM',
    });
    let clickBtn = ()=>{
         props.sendData(state.author);
    }; 

  return (
    <React.Fragment>
 <div className='container mt-3'>
    <div className='row'>
        <div className='col-md-8'>
            <div className='card shadow-lg'>
                <div className='card-body bg-warning text-dark'>
                    <p className='h4'>Child Component</p>
                    <p>{props.channel}</p>
                    <p>{state.author}</p>
                    <button className='btn btn-dark btn-sm' onClick={clickBtn}>send</button>
                </div>
            </div>
        </div>
    </div>
 </div>
    </React.Fragment>
  )
}

export default Child1