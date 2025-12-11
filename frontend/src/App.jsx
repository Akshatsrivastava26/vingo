import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Route>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signip' element={<SignIn />}/>
    </Route>
  )
}

export default App