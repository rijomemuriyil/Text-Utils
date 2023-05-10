// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
         msg:message,
         type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#033968';
    showAlert("Dark Mode has been enabled","success");
    document.title="TextUtils-Dark Mode"

    // setInterval(() => {
    //   document.title="TextUtils is Amazing"
    // }, 2000);

    // setInterval(() => {
    //   document.title="Install Now"
    // }, 1500); 

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils-Light Mode"


    }
  }


  return (
    
     <>  


{/* <Router>

        <Alert alert={alert}/>
        <div className='container my-3'>
            
        <Routes>
                  <Route path="/about">
                      element={<About />}
                  </Route>
              
                  <Route path="/">
                      element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}
                  </Route>
        </Routes>    
            
        </div>
   
 </Router> */}
 <Navbar title="TextUtils" aboutText="About TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>  
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
      
{/* 
 <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>  
      <div className="container my-3">
        <Routes>   
          // /users  -->Component 1
          // /users/home -->Component2

          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
        </Routes>
      </div>
   </Router> */}


     </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn with harry
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
