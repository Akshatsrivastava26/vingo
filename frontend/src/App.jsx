import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Nav from './components/Nav'
import ForgotPassword from './pages/ForgotPassword'
export const serverUrl="http://localhost:8000";
import useGetCurrentUser from './hooks/useGetCurrentUser'
import { useSelector } from 'react-redux'
import useGetCity from './hooks/useGetCity'
import useGetMyShop from './hooks/useGetMyShop'
import CreateEditShop from './pages/CreateEditShop'


function App() {
  useGetCurrentUser();
  useGetCity();
  useGetMyShop();
  const {userData}=useSelector((state)=>state.user);
  return (
    <Routes>
      <Route path='/signup' element={!userData?<SignUp/>:<Navigate to="/"/>}/>
      <Route path='/signin' element={!userData?<SignIn/>:<Navigate to="/"/>}/>
      <Route path='/forgot-password' element={!userData?<ForgotPassword />:<Navigate
       to={"/"}/>}/>
      <Route path='/' element={userData?<Home/>:<Navigate to="/signin"/>}/>
      <Route path='/create-edit-shop' element={userData?<CreateEditShop/>:<Navigate to="/signin"/>}/>

    </Routes>
  )
}


export default App

// import React from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import SignUp from './pages/SignUp'
// import SignIn from './pages/SignIn'
// import Home from './pages/Home'
// import ForgotPassword from './pages/ForgotPassword'
// import Nav from './components/Nav' // ✅ IMPORT NAV
// export const serverUrl="http://localhost:8000";

// import useGetCurrentUser from './hooks/useGetCurrentUser'
// import { useSelector } from 'react-redux'
// import useGetCity from './hooks/useGetCity'

// function App() {
//   useGetCurrentUser();
//   useGetCity();
//   const { userData } = useSelector((state)=>state.user);

//   return (
//     <>
//       {/* ✅ NAVBAR RENDERS GLOBALLY */}
//       {userData && <Nav />}

//       <Routes>
//         <Route path='/signup' element={!userData ? <SignUp/> : <Navigate to="/"/>}/>
//         <Route path='/signin' element={!userData ? <SignIn/> : <Navigate to="/"/>}/>
//         <Route path='/forgot-password' element={!userData ? <ForgotPassword /> : <Navigate to="/signin"/>}/>
//         <Route path='/' element={userData ? <Home/> : <Navigate to="/signin"/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App
