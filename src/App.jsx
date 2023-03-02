import { useState } from 'react'
import './App.css'
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1280px-Los_Angeles_Lakers_logo.svg.png"></img>
      <Schedule/>
    </div>
  )
}

export default App
