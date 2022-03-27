import React from 'react';
import './App.css';
import AboutComplex from './Components/AboutComplex/AboutComplex';
import Allinclusive from './Components/Allinclusive/Allinclusive';
import ChooseSection from './Components/ChooseSection/ChooseSection';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import Header from './Components/Header/Header';
import Tablet from './Components/Tablet/Tablet';


function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <ChooseSection />
      <AboutComplex />
      <Allinclusive />
      <Tablet />
    </div>
  );
}

export default App;
