import React from 'react'
import "./App.css";
import Firstsection from './Firstsection';

const App = () => {
  return (
    <React.Fragment>

    <div className='first-sections'>
      <Firstsection name="Yazdani" age={24}/>
    </div>

    </React.Fragment>
  )
}

export default App