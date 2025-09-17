import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h1>Signup</h1>
          <TextField label="username" variant='filled' />
          <br /><br />
          <TextField label="email" variant='filled' type='email' />
          <br /><br />
          <TextField label="password" variant='filled' type='password' />
          <br /><br />
          <TextField label="confirm password" variant='filled' type='password' />
          <br /><br />
          <Button variant='contained'>Signup</Button>
          
        
      
      </div>
  )
}

export default Signup