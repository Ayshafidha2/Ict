import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount( count + 1)
  const decrement = () => setCount(count - 1)
  return (
      <div>
      <h1> Counter {count}</h1>
      <Button variant='outlined'onClick={increment}>+</Button>
      <Button variant='outlined' onClick={decrement}>-</Button>
          
    
    </div>
  )
}

export default Counter