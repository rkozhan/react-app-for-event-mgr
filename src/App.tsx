import React from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import EventSection from './components/events/eventSection';
import ModalWindow from './components/modal/modalWindow';

function App() {


  return (
    <div className="App">
      <Header/>
      <main>
        <EventSection/>
      </main>
      <Footer/>
      <ModalWindow/>
    </div>
  );
}

export default App;
