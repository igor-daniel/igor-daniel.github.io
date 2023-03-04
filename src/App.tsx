import React from 'react';
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Sobre } from './components/sobre/Sobre'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;
