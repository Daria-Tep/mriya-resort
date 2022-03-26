import React from 'react';
import './App.css';
import ChooseSection from './Components/ChooseSection/ChooseSection';
import FirstScreen from './Components/FirstScreen/FirstScreen';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <ChooseSection />
    </div>
  );
}

export default App;
