import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../darkMode/DarkModeContext';
import styled from 'styled-components';
import logo from '../../image/logo.svg';
import logoDark from '../../image/logo-dark.svg';
import DarkMode from '../darkMode/DarkMode'
import { NavLink, Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: var(--color-fondo);
  padding-top: 5px;
  height: 6vh;
`;

const ContainerNav = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoLink = styled(Link)`
  img {
    
    max-height: 50px;
  }
`;

const NavbarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const NavbarNav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  @media screen and (max-width: 850px){
    display: none;
  }
`;

const NavItem = styled.li`
  transition: 0.5s;
  &:hover{
    transform: scale(1.1);
  }
  .active {
    background: var(--color-principal);
    color: var(--color-fondo);
  }
  .active:hover {
    color:  var(--color-fondo);
  }
`;
const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    margin-left: 15px;
  }
`;
 
const NavButton = styled.button`
  cursor: pointer;
  display: none;
  align-items: center;
  text-decoration: none;
  transition: 0.5s;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 2rem;
  border: none;
  transition: 0.5s;
  margin-left: 15px;
  padding: 10px 15px;
  background: var(--color-principal); 
  color: var(--color-fondo);
  font-size: 100%;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;


const Overlay = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1002;
  left: 0;
  top: 0;
  background-color: var(--color-principal);
  overflow: hidden;
  transition: all 0.3s ease 0s;
  &.dark-mode {
    background-color: var(--color-secundario);
  }
`;

const OverlayContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.dark-mode {
    a:hover{
      color: var(--color-principal);
    }
  } 
  a {
    padding: 15px;
    font-size: 36px;
    display: block;
    transition: all 0.3s ease 0s;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-fondo);
  }
  a:hover{
    color: var(--color-secundario);
  }
  @media screen and (max-height:450px) {
    a {
        font-size: 20px;
    }
  }
`;

const CloseButton = styled.a`
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 65px;
  color: var(--color-fondo);
  text-decoration: none;
  cursor: pointer;
  &.dark-mode {
    &:hover{
      color: var(--color-principal);
    }
  } 
  &:hover {
    color: var(--color-secundario);
  }
  @media screen and (max-height:450px) {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
`;

const CustomNavLink = styled(NavLink)`
  align-items: center;
  text-decoration: none;
  color: var(--color-principal); /* Cambia el color del texto según tu diseño */
  font-weight: bold; /* Ajusta el peso de la fuente según tu diseño */
  text-transform: uppercase;
  border-radius: 2rem;
  transition: 0.5s;
  padding: 10px 15px;

  &:hover {
    color: var(--color-secundario); /* Cambia el color al pasar el mouse por encima según tu diseño */
  }
`;

const Menu = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode(false);
  const [key, setKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openNav = () => {
    setMobileMenuOpen(true);
  };

  const closeNav = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Nav>
      <ContainerNav>
        <div key={key}>
          <LogoLink to="/">
            <img src={isDarkMode ? logoDark : logo}  alt="Alex.dev" />
          </LogoLink>
        </div>
        <NavbarDiv>
          <NavbarNav>
            <NavItem>
              <CustomNavLink to="/">
                Inicio
              </CustomNavLink>
            </NavItem>
            <NavItem>
              <CustomNavLink to="/about">
                Sobre Mi
              </CustomNavLink>
            </NavItem>
            <NavItem>
              <CustomNavLink to="/skills">
                Skills
              </CustomNavLink>
            </NavItem>
            <NavItem>
              <CustomNavLink to="/formacion">
                Formación
              </CustomNavLink>
            </NavItem>
            <NavItem>
              <CustomNavLink to="/proyectos">
                Proyectos
              </CustomNavLink>
            </NavItem>
          </NavbarNav>
          <DivButtons>
            <DarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <NavButton className="menu" onClick={openNav}>
              Menu
            </NavButton>    
          </DivButtons>
        </NavbarDiv>
        <Overlay style={{ width: mobileMenuOpen ? '100%' : '0' }}>
          <CloseButton className="close" onClick={closeNav}>
            &times;
          </CloseButton>
          <OverlayContent>
            <NavLink onClick={closeNav} className="overlay-link" to="/">
              Inicio
            </NavLink>
            <NavLink onClick={closeNav} className="overlay-link" to="/about">
              Sobre Mi
            </NavLink>
            <NavLink onClick={closeNav} className="overlay-link" to="/skills">
              Skills
            </NavLink>
            <NavLink
              onClick={closeNav}
              className="overlay-link"
              to="/formacion"
            >
              Formación
            </NavLink>
            <NavLink
              onClick={closeNav}
              className="overlay-link"
              to="/proyectos"
            >
              Proyectos
            </NavLink>
          </OverlayContent>
        </Overlay>
      </ContainerNav>
    </Nav>
  );
};

export default Menu;
