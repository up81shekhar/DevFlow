import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar"
import LandingPage from "./component/landingpage/LandingPage"
import Foooter from "./component/landingpage/Foooter"
import Login from "./component/Auth/Login"
import Profile from "./component/Dashboard/Profile"
import Signup from "./component/Auth/Signup"

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Profile />} />
  
    </Routes>
    </BrowserRouter>
  )
}

export default App

