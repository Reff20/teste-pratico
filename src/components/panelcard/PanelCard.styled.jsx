import styled from "styled-components"

//CARD SECTION

export const Card = styled.div`
    background-color: #e9e9e9;
    width: 45%;
    padding: 1.3rem;
    border-radius: 30px;
`

export const CardTitle = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #FFFF;
    width: 30%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
    margin-bottom: 10px;
`

export const CardSubTitle = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 400;
    background-color: #deeaf7;
    width: 50%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 10px;
`

export const CardBox = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 400;
    background-color: #FFFF;
    width: 50%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 10px;
`

export const CardContent = styled.p`
    &::first-letter{
        padding-left: 10px;
    }
    text-align: justify;
    margin-top: 10px;
`

//THREAD SECTION

export const Thread = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    background-color: #e9e9e9;
    height: 3rem;
    border-radius: 30px;
    padding: 0 20px;
    justify-content: space-around;
`

export const Content = styled.p`
    display: flex;
    align-items: center;
    background-color: white;
    width: 15%;
    height: 50%;
    padding-left: 15px;
    border-radius: 10px;
`

//MAINCARD SECTION

export const Maincard = styled.div`
    background-color: #e9e9e9;
    width: 95%;
    padding: 1.3rem;
    border-radius: 30px;
    margin-bottom: 1.3rem;
`

export const MaincardTitle = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 600;
    background-color: #FFFF;
    width: 30%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
    margin-bottom: 10px;
`

export const MaincardSubTitle = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 400;
    background-color: #FFFF;
    width: 50%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 10px;
`

export const MaincardBox = styled.h1`
    display: flex;
    align-items: center;
    font-weight: 400;
    background-color: #FFFF;
    width: 50%;
    height: 25px;
    padding-left: 10px;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 10px;
`

export const MaincardContent = styled.p`
    &::first-letter{
        padding-left: 10px;
    }
    text-align: justify;
    margin-top: 10px;
`