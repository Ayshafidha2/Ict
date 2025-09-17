import React from 'react'
import { AppBar, Toolbar, IconButton, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
        
          <h3 style={{ flexGrow: 1 }}>myapp</h3>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Login</Button>
          </Link>
          &nbsp;

          <Link to="/signup">
            <Button variant="contained">Signup</Button>
                  </Link>

           <Link to="/table">
            <Button variant="contained">Table</Button>
                  </Link> 
            <Link to="/State">
            <Button variant="contained">State</Button>
                  </Link> 


            <Link to="/counter">
            <Button variant="contained">Counter</Button>
                  </Link> 
            <Link to="/button">
            <Button variant="contained">Buttons</Button>
          </Link> 
          <Link to="/product">
            <Button variant="contained">Product</Button>
                  </Link> 





                  
                  
                  
        </Toolbar>
      </AppBar>

      <Toolbar />
    </>
  )
}

export default Navbar
