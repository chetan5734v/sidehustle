import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from '../components/Landing'
import {Route, Routes} from 'react-router-dom'
import Signin from '../components/signin'
import Signup from '../components/signup'
import Profileform from '../components/profileform'
import ProfilePage from '../components/profilepage'
// import Profile from '../components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/signin" element={<Signin/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/profileform" element={<Profileform/>} />
       <Route path="/profilepage" element={<ProfilePage/>} />
       {/* <Route path="/profile" element={<Profile/>} /> */}
      </Routes>
    
    </>
  )
}

export default App
