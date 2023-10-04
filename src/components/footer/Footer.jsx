import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDarkMode } from '../darkMode/DarkModeContext';
import styled, { keyframes } from 'styled-components';
import linkedin from '../../image/linkedin.svg';
import mail from '../../image/mail.svg';
import github from '../../image/github.svg';
import whatsapp from '../../image/whatsapp.svg';
import waveLight from '../../image/wave.png'
import waveDark from '../../image/wave-dark.png'

const animateWave = keyframes`
  0% {
        background-position: 1000px;
    }
    100% {
        background-position: 0px;
    }
`;

const animateWave_02 = keyframes`
  0% {
        background-position: 0px;
    }
    100% {
        background-position: 1000px;
    }
`;

const StyledFooter = styled.div`
  box-sizing: border-box;
  position: relative;
  max-width: 100vw;
  background: var(--color-principal);
  height: 13.6vh;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  &.dark-mode {
    background: var(--color-secundario);
  }
`;

const Wave = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('${props => (props.isDarkMode ? waveDark : waveLight)}');
  background-size: 1000px 100px;
`;

const Wave1 = styled(Wave)`
  z-index: 997;
  opacity: 1;
  bottom: 0;
  animation: ${animateWave} 8s linear infinite;
`;

const Wave2 = styled(Wave)`
  z-index: 996;
  opacity: 0.5;
  bottom: 10px;
  animation: ${animateWave_02} 8s linear infinite;
`;

const Wave3 = styled(Wave)`
  z-index: 997;
  opacity: 0.2;
  bottom: 15px;
  animation: ${animateWave} 5s linear infinite;
`;

const Wave4 = styled(Wave)`
  z-index: 996;
  opacity: 0.7;
  bottom: 20px;
  animation: ${animateWave_02} 5s linear infinite;
`;



const SocialIconList = styled.ul`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 30vw;
  min-width: 280px;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialIconItem = styled.li`
  display: inline-block;
  transition: all 0.5s;
  padding: 15px;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuFooterList = styled.ul`
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
  list-style: none;
`;


const FooterLink = styled(Link)`
  font-size: 1em;
  color: var(--color-fondo);
  margin: 0 10px;
  display: inline-block;
  text-decoration: none;
  opacity: .75;
  &.dark-mode {
    color: var(--color-principal);
  }
  &:hover {
    opacity: 1;
    text-shadow: 0 0 15px var(--color-fondo);
  }
`;

const CopyText = styled.p`
  color: var(--color-secundario);
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: .9em;
  opacity: .75;
  &.dark-mode {
    color: var(--color-principal);
  }
`;


export default function Footer() {
  const { isDarkMode } = useDarkMode(false);
  const [key, setKey] = useState(0); // Estado para forzar la recarga del componente

  useEffect(() => {
    // Actualizar el estado "key" para forzar la recarga del componente
    setKey(prevKey => prevKey + 1);
  }, [isDarkMode]);

  return (
    <StyledFooter>
      <div key={key}>
        <Wave1 isDarkMode={isDarkMode} />
        <Wave2 isDarkMode={isDarkMode} />
        <Wave3 isDarkMode={isDarkMode} />
        <Wave4 isDarkMode={isDarkMode} />
      </div>
      <SocialIconList>
        <SocialIconItem>
          <IconLink to="https://www.linkedin.com/in/brian-diaz-avila/">
            <img src={linkedin} alt="LinkedIn" />
          </IconLink>
        </SocialIconItem>
        <SocialIconItem>
          <IconLink to="https://www.github.com/yourgithub">
            <img src={github} alt="GitHub" />
          </IconLink>
        </SocialIconItem>
        <SocialIconItem>
          <IconLink to="https://www.whatsapp.com/yourwhatsapp">
            <img src={whatsapp} alt="WhatsApp" />
          </IconLink>
        </SocialIconItem>
        <SocialIconItem>
          <IconLink to="mailto:youremail@example.com">
            <img src={mail} alt="Email" />
          </IconLink>
        </SocialIconItem>
      </SocialIconList>
      <MenuFooterList>
        <li>
          <FooterLink isDarkMode={isDarkMode} to="/">
            Inicio
          </FooterLink>
        </li>
        <li>
          <FooterLink isDarkMode={isDarkMode} to="/about">
            Sobre Mi
          </FooterLink>
        </li>
        <li>
          <FooterLink isDarkMode={isDarkMode} to="/skills">
            Skills
          </FooterLink>
        </li>
        <li>
          <FooterLink isDarkMode={isDarkMode} to="/formacion">
            Formación
          </FooterLink>
        </li>
        <li>
          <FooterLink isDarkMode={isDarkMode} to="/proyectos">
            Proyectos
          </FooterLink>
        </li>
      </MenuFooterList>
      <CopyText>©2023 Alexander Diaz | Todos Los Derechos Reservados</CopyText>
    </StyledFooter>
  );
}
