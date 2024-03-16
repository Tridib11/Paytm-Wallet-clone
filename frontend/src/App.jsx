import {Routes,BrowserRouter, Route} from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/Dashboard"

function App() {

  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/singup" element={<Signup />}/>
        <Route path="/singin" element={<Signin />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/send" element={<SendMoney />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
