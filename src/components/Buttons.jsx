import { Button } from '@mui/material'
import React, { useState } from 'react'

const Buttons = () => {
  const [n, seta] = useState('')

  const a = () => seta('React')
  const b = () => seta('Angular')
  const c = () => seta('Node.js')

  return (
    <div>
      <Button variant='outlined' onClick={a}>React</Button>
      <Button variant='outlined' onClick={b}>Angular</Button>
      <Button variant='outlined' onClick={c}>Node.js</Button>
      <p>Welcome {n}</p>
    </div>
  )
}

export default Buttons
