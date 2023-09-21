import './App.css';
import Navbar from './Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Workf from './Components/Workf';
import Projects from './Components/Projects';
import Exp from './Components/Exp';
import Home from './Components/Home';
import React, { useState, useEffect } from 'react';
import './Components/Home.css'

function App() {
  return (
   <>
   <div className='main'>
   <Navbar/>
   <Home /><br /><br /><br /><br /><br /><br />
   <About/><br /><br />
   <Skills/><br /><br />
   <Projects/><br /><br />
   <Exp/><br /><br />
   <Workf/> <br />
   </div>
   
   </>
  );
}

export default App;
