import styled from "styled-components";
import avatar from '../../image/avatar.svg'


const MainDiv = styled.div`
    height: 68.6vh;
    max-width: 1200px;
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 900px) {
        margin-bottom: 100px;
        height: 90vh;
        box-sizing: content-box;
    }
`;

const StyledTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    padding: 0 0 1.5rem;
    color: var(--color-principal);
    @media screen and (max-width: 900px) {
        margin-bottom: 0;
    }
`;

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    box-sizing: border-box;
    width: 90vw;
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;
    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    img {
        max-width: 350px;
        margin-right: 3rem;

        @media screen and (max-width: 900px) {
            width: 60vw;
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }
`;

const SecondDiv = styled.div`
    display: flex;
    flex-direction: column;
    h3 {
        font-size: 1.5rem;
        color: var(--color-principal);
    }
    p {
        font-size: 1.2rem;
        margin: 1.5rem 0 0;
        color: var(--color-secundario);
        line-height: 1.1;
        @media screen and (max-width: 900px) {
            line-height: 1;
        }
    }
`;

const ButtonStyled = styled.button`
  /* Estilos normales */
  margin: 1.5rem auto 0 0;
  padding: .5rem 1rem;
  border-style: solid;
  border-width: 3px;
  border-radius: 12px;
  border-color: #d62828;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  transition: all .5s;
  color: var(--color-principal);
  background-color: var(--color-fondo);
  &:hover {
    color: #f8f8f8;
    background-color: #d62828;
    box-shadow: 0 0 5px #d62828, 0 0 10px #d62828, 0 0 15px #d62828;
  }
  &.dark-mode {
    color: var(--color-principal);
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


function SobreMi() {
    
    return (
        <>
        <MainDiv>
            <StyledTitle>Sobre Mi</StyledTitle>
            <StyledDiv>
                <FirstDiv>
                    <img src={avatar} alt="avatar" />
                </FirstDiv>
                <SecondDiv>
                    <h3>¡Hola! Soy Brian Alexander Díaz Ávila</h3>     
                    <p>un apasionado desarrollador full stack con una misión: transformar ideas en soluciones digitales sorprendentes.<br/>
                    Mi profundo amor por la tecnología y el aprendizaje constante me impulsan a explorar el mundo del desarrollo web desde todos los ángulos. <br/> 
                    Mi enfoque se centra en crear experiencias digitales atractivas y funcionales, y estoy emocionado por la oportunidad de aplicar mi creatividad y conocimientos técnicos en proyectos desafiantes. Siempre estoy listo para abrazar nuevas tecnologías y enfrentar cualquier reto que se presente en este apasionante viaje de desarrollo. ¡Vamos a construir el futuro juntos!
                    </p>
                    <ButtonStyled onClick={downloadCV}> Descargar CV </ButtonStyled>
                </SecondDiv>
            </StyledDiv>
        </MainDiv>
        </>
    );
}

export default SobreMi;