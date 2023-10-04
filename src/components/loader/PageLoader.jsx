import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const chunkTop = keyframes`
  0%, 100% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-80deg);
  }
`;

const chunkBottom = keyframes`
  0%, 100% {
    transform: rotate(-40deg);
  }
  50% {
    transform: rotate(0deg);
  }
`;

const eatingPath = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const LoaderDiv = styled.div`
  position: absolute;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
  opacity: 1;
  visibility: visible;
  transition: 0.5s;

  &.fade-out {
    opacity: 0;
    visibility: hidden;
  }
`;

const PacmanContainer = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 50vh;
  width: 50%;
`;

const Pacman = styled.div`
  position: relative;
  background: transparent;
  z-index: 100;
  &::before,
  &::after {
    position: absolute;
    top: -35px;
    display: block;
    border-radius: 50%;
    content: "";
    height: 0px;
    width: 0px;
  }
  &::before {
    animation: ${chunkTop} 0.5s ease infinite;
    border: 35px solid #ffcc00;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }
  &::after {
    animation: ${chunkBottom} 0.5s ease infinite;
    border: 35px solid #ffcc00;
    border-right-color: transparent;
    border-top-color: transparent;
  }
`;

const PacmanBall = styled.div`
  display: flex;
  justify-content: space-around;
  animation: ${eatingPath} 0.5s linear infinite;
  width: 100%;

  &::before {
    background: #fff;
    border-radius: 50%;
    content: "";
    height: 1rem;
    width: 1rem;
  }
`;


const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ajustar la posición del scroll al principio de la página antes de cargar
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Al cargar la página, establecer el estado de carga como falso después de 600ms
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    // Restaurar el comportamiento de desplazamiento y quitar el evento antes de desmontar el componente
    return () => {
      clearTimeout(loaderTimeout);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.body.style.overflow = 'auto';
    };
  }, []);


  useEffect(() => {
    // Controlar el comportamiento de desplazamiento
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

// Agregar display none al loader luego de 0.5s para dar tiempo al fade out
  useEffect(() => {
    if (!isLoading) {
      const hideLoaderTimeout = setTimeout(() => {
        const loaderDiv = document.querySelector('.fade-out');
        if (loaderDiv) {
          loaderDiv.style.display = 'none';
        }
      }, 500);
      return () => clearTimeout(hideLoaderTimeout);
    }
  }, [isLoading]);

  return (
    <LoaderDiv className={isLoading ? 'loader-div' : 'loader-div fade-out'}>
      <PacmanContainer >
        <Pacman />
        <PacmanBall />
        <PacmanBall />
        <PacmanBall />
        <PacmanBall />
        <PacmanBall />
        <PacmanBall />
        <PacmanBall />
        <PacmanBall />
      </PacmanContainer>
    </LoaderDiv>
  );
};

export default PageLoader;
