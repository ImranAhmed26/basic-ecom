import React from 'react'
import Policy from '../constants/comanyPolicy'

const DisplayCard = () => {
  return (
    <div>
    <div className='border bg-gray-50 w-full px-8 py-4 mx-4 capitalize'>
    {
        Policy.general.map ((i,k)=>{
           return (
            <div key={k}>
            <div>{i.name}</div>
            <div>{i.details}</div>
            </div>
           )
        })
    }
    </div>
    </div>
  )
}

export default DisplayCard