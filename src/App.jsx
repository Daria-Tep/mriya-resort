import React from 'react';
import './App.css';
import AboutComplex from './Components/AboutComplex/AboutComplex';
import ChooseSection from './Components/ChooseSection/ChooseSection';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <ChooseSection />
      <AboutComplex />
    </div>
  );
}

export default App;
