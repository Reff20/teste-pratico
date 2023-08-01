import styled from "styled-components"

export const MainDesktop = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
    width: 25%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

export const TitleDesktop = styled.div`
    font-family: 'Rowdies', cursive;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 5rem;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`