// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import {
  Route,Routes,BrowserRouter
} from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000)
}
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-primary');

}

  const toggleMode=(cls)=>{
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Light Mode";
      // setInterval(()=>{
      // document.title="TextUtils is amazing";
      // },2000)
      // setInterval(()=>{
      //   document.title="Install TextUtils";
      //   },1500)

    }else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      // document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode"

    }
  }
  return (
    <>
        <BrowserRouter>
       {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
       <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
       <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text to Analyze" mode={mode} />} />
           <Route exact path="/about" element={<About mode={mode}/> } />
       </Routes>
     
       </div>
       </BrowserRouter>


    </>
  );
}

export default App;
