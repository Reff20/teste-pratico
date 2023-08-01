import React from 'react'
import { Card, CardBox, CardContent, CardSubTitle, CardTitle, Content, Maincard, MaincardBox, MaincardContent, MaincardSubTitle, MaincardTitle, Thread } from './PanelCard.styled'

export default function Panelcard({thread, maincard, card, tcontent, mcontent, ccontent}) {

  const returnThread = () => {
    return(
      <Thread>
        {
          tcontent.map((e)=>{
            return <Content>{e}</Content>
          })
        }
      </Thread>
    )
  }

  const returnMaincard = () => {
    return(
      <Maincard>
        <MaincardTitle>{mcontent.title}</MaincardTitle>
        <MaincardSubTitle>{mcontent.subtitle}</MaincardSubTitle>
        <MaincardBox>{mcontent.box}</MaincardBox>
        <MaincardContent>{mcontent.text}</MaincardContent>
      </Maincard>
    )
  }

  const returnCard = () => {
    return(
      <Card>
        <CardTitle>{ccontent.title}</CardTitle>
        <CardSubTitle>{ccontent.subtitle}</CardSubTitle>
        <CardBox>{ccontent.box}</CardBox>
        <CardContent>{ccontent.text}</CardContent>
      </Card>
    )
  }

  return (
    <>
      {thread ? returnThread() : null}
      {maincard ? returnMaincard() : null}
      {card ? returnCard() : null}
    </>
  )
}
