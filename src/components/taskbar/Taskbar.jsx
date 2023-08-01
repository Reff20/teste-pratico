import React from 'react'
import { CardsContainer, MainDesktop, TitleDesktop } from './Taskbar.styled'
import Taskcard from '../taskcard/Taskcard'

export default function Taskbar() {
  return (
    <>
        <MainDesktop>
            <TitleDesktop>Tarefas de Hoje</TitleDesktop>
            <CardsContainer>
                <Taskcard title={"Task n° 1"} content={`Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Pellentesque vitae porta lectus. 
                Proin eu sapien faucibus, volutpat augue tristique, dictum eros. 
                Aenean non efficitur orci. Donec egestas tempor molestie. Sed ante lacus, posuere nec sollicitudin ac, 
                posuere a nulla. Nunc ut turpis ut ligula aliquam vulputate ac in mauris. Curabitur tempus id ligula tincidunt 
                sodales.`}/>
                <Taskcard title={"Task n° 27"} content={`Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Pellentesque vitae porta lectus. 
                Proin eu sapien faucibus, volutpat augue tristique, dictum eros. 
                Aenean non efficitur orci. Donec egestas tempor molestie. Sed ante lacus, posuere nec sollicitudin ac, 
                posuere a nulla. Nunc ut turpis ut ligula aliquam vulputate ac in mauris.`}/>
            </CardsContainer>

            <TitleDesktop>Projeto recente</TitleDesktop>
            <CardsContainer>
            <Taskcard title={"Projeto de Acompanhamento"} content={`Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Pellentesque vitae porta lectus. 
                Proin eu sapien faucibus, volutpat augue tristique, dictum eros. `}/>
            </CardsContainer>
        </MainDesktop>
    </>
  )
}
