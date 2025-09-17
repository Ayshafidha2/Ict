import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {

    var [a, seta] = useState("aisha")
    var [b, setb] = useState() 
    
    const changeName = (e) => {
        console.log(e.target.value)
        seta(e.target.value)
    }
    const DisplayName = () => {
        setb(a)

    }

  return (
      <div>
          <h1>Welcome {b}</h1>
          <TextField variant='outlined' onChange={changeName} />
          <br/><br/>
          <Button variant='contained' onClick={DisplayName}>Show</Button>
    </div>
  )
}

export default StateBasics