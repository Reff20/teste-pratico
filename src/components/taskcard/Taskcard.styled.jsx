import styled from "styled-components"

export const Body = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 90%;
    height: auto;
    padding: 5%;
    background-color: #e9e9e9;
    border-radius: 30px;
    margin-top: 30px;
    cursor: pointer;
`

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #FFFF;
    width: 70%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
`

export const Content = styled.p`
    &::first-letter{
        padding-left: 10px;
    }
    text-align: justify;
    margin-top: 10px;
`