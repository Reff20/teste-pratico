import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Desktop = styled.div`
    width: 15%;
    @media (max-width: 1000px) {
        display: none;
    }
`

export const Mobile = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`


export const Main = styled.div`
    width: 100%;
    height: 100%;
    background-color: #edf3f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #b8b3b3;
`

export const TitleSidebar = styled.h1`
    margin-top: 25%;
    color: black;
    font-family: 'Rowdies', cursive;
    font-size: 1.3rem;
`

export const Menu = styled.ul`
    margin-top: 25%;
    width: 100%;
    height: 600px;
`

export const ItemsMenu = styled.li`

    display: flex;
    align-items: center;
    padding-left: 10%;
    font-weight: 500;
    width: 70%;
    height: 8%;
    margin: 2rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.selected === true ? '#e0e7ee' : ''};
    background-color: ${(props) => props.selected === true ? '#4a4e52' : ''};
    border-radius: ${(props) => props.selected === true ? '30px' : ''};

    &:hover{
        background-color: #4a4e52;
        color: #e0e7ee;
        border-radius: 30px;
        cursor: ${(props) => props.selected === true ? 'default' : 'pointer'};
    }
`

export const ProfileDiv = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const ProfilePic = styled(FontAwesomeIcon)`
    color: #4a4e52;
    background-color: #b4b6b6;
    width: 15%;
    padding: 10px;
    border-radius: 1000px;
    margin-bottom: 5%;
    cursor: pointer;
`

export const ProfileName = styled.p`
    cursor: pointer;
`

export const ProfileEmail = styled.p`
    color: #797979;
    cursor: pointer;
`

export const MainMobile = styled.div`
    width: ${({active})=> active === true ? "100vw" : "15vw"};
    height: 100%;
    background-color: #edf3f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #b8b3b3;
`

export const HamburgIcon = styled(FontAwesomeIcon)`
    margin-top: 30px;
    font-size: 30px;
    cursor: pointer;
`

export const TitleSidebarMobile = styled.h1`
    display: ${({active})=> active === true ? 'initial' : 'none'};
    margin-top: 50px;
    color: black;
    font-family: 'Rowdies', cursive;
    font-size: 1.3rem;
`

export const MenuMobile = styled.ul`
    display: ${({active})=> active === true ? 'initial' : 'none'};
    margin-top: 100px;
    width: 100%;
    height: 50%;
`

export const ItemsMenuMobile = styled.li`
    display: ${({active})=> active === true ? 'initial' : 'none'};

    display: flex;
    align-items: center;
    padding-left: 10%;
    font-weight: 500;
    width: 70%;
    height: 12%;
    margin: 2rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.selected === true ? '#e0e7ee' : ''};
    background-color: ${(props) => props.selected === true ? '#4a4e52' : ''};
    border-radius: ${(props) => props.selected === true ? '30px' : ''};

    &:hover{
        background-color: #4a4e52;
        color: #e0e7ee;
        border-radius: 30px;
        cursor: ${(props) => props.selected === true ? 'default' : 'pointer'};
    }
`

export const ProfileDivMobile = styled.div`
    display: ${({active})=> active === true ? 'initial' : 'none'};
    font-family: 'Roboto', sans-serif;
    display: flex;
    margin-top: 10%;
    flex-direction: column;
    align-items: center;
    
`

export const ProfilePicMobile = styled(FontAwesomeIcon)`
    display: ${({active})=> active === true ? 'initial' : 'none'};
    color: #4a4e52;
    background-color: #b4b6b6;
    width: 15%;
    padding: 10px;
    border-radius: 1000px;
    margin-bottom: 5%;
    cursor: pointer;
`

export const ProfileNameMobile = styled.p`
    display: ${({active})=> active === true ? 'initial' : 'none'};
    cursor: pointer;
`

export const ProfileEmailMobile = styled.p`
    display: ${({active})=> active === true ? 'initial' : 'none'};
    color: #797979;
    cursor: pointer;
`