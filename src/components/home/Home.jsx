import React from 'react';
import styled from 'styled-components';
import heroImg from '../../image/ilustracion1.svg'
import whatsapp from '../../image/whatsapp-hero.svg'
import linkedin from '../../image/linkedin-hero.svg'
import mail from '../../image/mail-hero.svg'

const StyledHome = styled.div`
   display: flex;
   flex-direction: column;
`;

const HeroDiv = styled.div`
  height: 68.6vh;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  #hero-img {
    max-width: 35vw;
    margin-left: 2rem;
  }
  
  @media screen and (max-width: 850px) {
    flex-direction: column;
    box-sizing: content-box;
    #hero-img {
      max-width: 60vw;
      width: 60vw;
      margin-left: 0;
      margin-top: 1.5rem;
    } 
  }
  @media screen and (max-width: 550px) {
    #hero-img {
      max-width: 80vw;
      width: 80vw;
    }
  }
  `;

const ButtonStyled = styled.button`
  /* Estilos normales */
  margin-top: 1.5rem;
  padding: .5rem 1rem;
  border-style: solid;
  border-width: 3px;
  border-radius: 12px;
  border-color: #d62828;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-principal);
  background-color: var(--color-fondo);
  transition: all .5s;
  &.dark-mode {
    color: var(--color-principal);
  }
  &:hover {
    color: #f8f8f8;
    background-color: #d62828;
    box-shadow: 0 0 5px #d62828, 0 0 10px #d62828, 0 0 15px #d62828;
  }
`;

const TextDiv = styled.div`
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--color-principal);
  }
  p {
    font-size: 1.5rem;

    color: var(--color-secundario);
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  div img {
    margin-top: 1.5rem;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    align-items: center;
    transition: color .5s;
  }
  div img:hover {
    scale: 1.1;    
  }
`;

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/src/CV.pdf'; // Ruta al archivo en la raíz del proyecto
  link.setAttribute('download', 'cv.pdf'); // Establece el atributo 'download' para descargar el archivo
  link.style.display = 'none'; // Oculta el enlace
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  return (
      <StyledHome>  
        <HeroDiv>
          <TextDiv>
            <h1>¡Hola, soy Alex Diaz!</h1>
            <p>Programador Full Stack</p>
            <div>
              <ButtonStyled onClick={downloadCV}> Descargar CV </ButtonStyled>
              <img src={whatsapp} alt="whatsapp" />
              <img src={linkedin} alt="linkedin" />
              <img src={mail} alt="mail" />
            </div>
          </TextDiv> 
          <img src={heroImg} id="hero-img" alt="Hero" />
        </HeroDiv>
      </StyledHome>
  );
};

export default Home;