import React from 'react';
import Hero from './components/Hero';
import PhotoReel from './components/PhotoReel';
import ContactForm from './components/ContactForm';
import MyJourney from './components/MyJourney';

function App() {
  return (
    <div className="App">
      <Hero />
      <PhotoReel />
      <MyJourney/>
      <ContactForm/>
    </div>
  );
}

export default App;
