import React, { useState, useEffect } from 'react';
import phrases from './data/phrases.json';
import FortuneDisplay from './components/FortuneDisplay';
import Background from './components/Background';
import Button from './components/Button';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  text-align: center;
  color: #fff;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

const App = () => {
  const [currentPhrase, setCurrentPhrase] = useState({});
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    getRandomFortune();
  }, []);

  const getRandomFortune = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
    setBackgroundImage(getRandomBackground());
  };

  const getRandomBackground = () => {
    const backgrounds = [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e',
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      'https://images.unsplash.com/photo-1528747045269-390fe33c19d3',
      'https://images.unsplash.com/photo-1496200186974-4293800e2c20'
    ];
    return backgrounds[Math.floor(Math.random() * backgrounds.length)];
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Background backgroundImage={backgroundImage} />
        <Overlay />
        <FortuneDisplay phrase={currentPhrase.phrase} author={currentPhrase.author} />
        <Button onClick={getRandomFortune}>Cambiar Frase y Fondo</Button>
      </AppContainer>
    </>
  );
};

export default App;
