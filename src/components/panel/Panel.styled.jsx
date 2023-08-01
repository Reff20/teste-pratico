import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MainPanel = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
    font-family: 'Roboto', sans-serif;
    width: 60%;
    height: 100%;
    background-color: #edf3f8;
`

export const TopSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem;
    margin-top: 100px;
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1`
    margin-top: 10%;
    color: black;
    font-family: 'Rowdies', cursive;
    font-size: 1.3rem;
`

export const Subtitle = styled.p`
    color: #4a4e52;
`

export const Icon = styled(FontAwesomeIcon)`
    padding: 10px;
    border: 1px solid #a6aaad;
    margin: 0 10px;
    font-size: 20px;
    color: #4a4e52;
    border-radius: 8px;
    cursor: pointer;
`

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    margin-top: 100px;
`

export const CardDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const ThreadDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.5rem;
`

export const MaincardDiv = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`