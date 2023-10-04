import React from 'react';
import moon from '../../image/moon.svg';
import sunny from '../../image/sunny.svg';
import styled from 'styled-components';


const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: var(--color-fondo);
`;

const LabelStyled = styled.label`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        position: absolute;
        opacity: 0;
    }
    .moon{
        position: absolute;
        height: 1.5em;
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, .5));
        z-index: 2;
        transform: scale(0);
        transition: 1s ease;
    }
    input:checked~.moon{
        transition-delay: .6s;
        transform: scale(1) rotate(360deg);
    }
    .sun {
        height: 1.5em;
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, .5));
        z-index: 2;
        transition: 1s ease;
        transition-delay: .6s;
    }
    input:checked~.sun{
        transition-delay: 0s;
        transform: rotate(360deg) scale(0);
    }
    .toggle {
        position: absolute;
        display: block;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        box-shadow: 
            inset 0 8px 60px rgba(0, 0, 0, .1),
            inset 0 8px 8px rgba(0, 0, 0, .1),
            inset 0 -4px 4px rgba(0, 0, 0, .1);
        z-index: 1;
        transition: 1s;
    }
    input:checked~.toggle {
        background: #2b2b2b;
    }

`;

function DarkMode({ isDarkMode, setIsDarkMode }) {    

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <ContainerStyled>
            <LabelStyled>
                <input type="checkbox" onChange={handleDarkModeToggle} />
                <img src={sunny} alt="sun" className='sun' />
                <img src={moon} alt="moon" className='moon' />
                <span className="toggle"></span>
            </LabelStyled>
        </ContainerStyled>
    );
}

export default DarkMode;