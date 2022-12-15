import "./App.css";
import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
// }from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert(
           {
          msg : message,
          type: type
        }
      )
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  // const toggleColor = (value) => {
    // console.log(value);
  //   setColor({
  //     value: value 
  //   });
  //   document.body.style.backgroundColor = 'color';
  // }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled","success");
      document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="This is awesome";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install Now";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title="TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} setColor={setColor}/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes> */}
        {/* <Route exact path="/about" element={<About/>}></Route> */}
        {/* <Route exact path="/" element={ */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* // }></Route> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
