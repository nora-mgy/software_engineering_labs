import { useState } from 'react'
import './App.css'
import Counter from "./Counter.jsx";
import LightSwitch from './LightSwitch.jsx';
import ButtonMaker from "./ButtonMaker.jsx";
import HotelSearch from "./HotelSearch.jsx";

function App() {
  return (
    <div>
      <h1>React State Example</h1>
      <Counter />
      <Counter />
      <Counter />
      <LightSwitch/>
      <ButtonMaker/>
      <HotelSearch/>
    </div>
  );
}

export default App
