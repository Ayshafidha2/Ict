import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Table  from './components/GetTable'
import GetTable from './components/GetTable'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import { Button } from '@mui/material'
import Buttons from './components/Buttons'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/table' element={<GetTable />} />
        <Route path='/State' element={<StateBasics />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/button' element={<Buttons />} />
        <Route path='/product' element={<Product />}/>
  </Routes>
    </>
  )
}

export default App
