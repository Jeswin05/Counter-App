import React from 'react'
import './App.css'

function Counter({title,count}) {
  
  return (
    <div className='text'>
    <h1>{title}{count}</h1>
   </div>
  )
}

export default Counter