import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//import About from './components/About'



function App() {
  const [mode,setMode]=useState("light");
  const darktogg =()=>{
    if(mode ==="light"){
    document.body.style.backgroundColor = "#29262c"
    setMode("dark")
    }else{
      document.body.style.backgroundColor = "white"
      setMode("light")
    }
  }
  const [alert,setAlert]=useState(null)

  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{setAlert(null)},1500)
  }


  return (<>
  <Router>
    <Navbar title={{name: "Comet",lname:".co"}} mode={mode} darktogg={darktogg}/>
    <Alert alert={alert} />

    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Textarea mode={mode} showAlert={showAlert}/>} />
    </Routes>
    
    {/*<Textarea mode={mode} showAlert={showAlert}/>*/}

  </Router>
  </>
    
  );
}

export default App;
