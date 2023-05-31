import React from 'react'
import Card from './Card'

function Button() {

    const data = [
        {
            volume : 2,
            issue : 2
        },
        {
            volume : 3,
            issue : 2
        },
        {
            volume : 5,
            issue : 7
        },
        {
            volume : 1,
            issue : 5
        },
        {
            volume : 9,
            issue : 1
        },
        {
            volume : 2,
            issue : 9
        },
          {
            volume : 1,
            issue : 1
        },
        {
            volume : 3,
            issue : 2
        },

    ]
  return (
    <>
    {
        data.map((data)=>{
         return   <Card data={data}/>
        })
    }
    </>
  )
}

export default Button