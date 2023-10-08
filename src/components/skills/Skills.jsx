import styled from "styled-components";

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

export default function Skills() {

    
    return (
        <MainDiv>
            <h2>Skills</h2>
        </MainDiv>
    );
}