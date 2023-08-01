import React from 'react'
import { Icon, MainPanel, Subtitle, Title, TopSection, TitleDiv, BottomSection, CardDiv, ThreadDiv, MaincardDiv } from './Panel.styled'
import { faMagnifyingGlass, faBookmark } from '@fortawesome/free-solid-svg-icons'
import Panelcard from '../panelcard/Panelcard'

export default function Panel() {
  return (
    <MainPanel>
      <TopSection>
        <TitleDiv>
          <Title>Painel</Title>
          <Subtitle>As últimas atualizações de hoje</Subtitle>
        </TitleDiv>
        <div>
          <Icon icon={faMagnifyingGlass} />
          <Icon icon={faBookmark} />
        </div>
      </TopSection>
      <BottomSection>
        <CardDiv>
          <Panelcard card ccontent={{
            'title': 'Título do Card',
            'subtitle': 'Subtítulo',
            'box': 'terceira',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae porta lectus. Proin eu sapien faucibus, volutpat augue tristique, dictum eros. Aenean non efficitur orci. Donec egestas tempor molestie'
          }} />
          <Panelcard card ccontent={{
            'title': 'Título do Card',
            'subtitle': 'Subtítulo',
            'box': 'terceira',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae porta lectus. Proin eu sapien faucibus, volutpat augue tristique, dictum eros. Aenean non efficitur orci. Donec egestas tempor molestie'
          }} />
        </CardDiv>
        <ThreadDiv>
          <Panelcard thread tcontent={['texto1','texto2','tópico','exemplo', 'outro']}/>
        </ThreadDiv>
        <MaincardDiv>
          <Panelcard maincard mcontent={{
            'title': 'Título do Card',
            'subtitle': 'Subtítulo',
            'box': 'terceira',
            'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae porta lectus. Proin eu sapien faucibus, volutpat augue tristique, dictum eros. Aenean non efficitur orci. Donec egestas tempor molestie. Sed ante lacus, posuere nec sollicitudin ac, posuere a nulla. Nunc ut turpis ut ligula aliquam vulputate ac in mauris. Curabitur tempus id ligula tincidunt sodales. Nulla erat libero, condimentum et risus et, tincidunt consequat enim. Quisque tincidunt molestie felis, et mattis massa. Curabitur pretium orci leo, sed bibendum ligula dignissim sit amet. Aliquam arcu magna, tincidunt a iaculis id, accumsan vestibulum turpis.

            Quisque ultrices erat a elit consequat, et imperdiet nisl vulputate. Nam pellentesque nulla id erat sodales, sit amet pretium odio volutpat. Pellentesque rhoncus erat in justo laoreet, feugiat viverra libero molestie. Nullam sit amet mattis lectus. Nunc ut sapien tellus. Morbi feugiat scelerisque rutrum. Phasellus mollis mauris quis dictum fringilla. Vestibulum dapibus dui vitae nibh pellentesque, id commodo diam aliquam. Vestibulum vel dolor enim. Cras a consequat tortor. Nam tristique est scelerisque mollis dapibus. Proin in convallis nulla. Sed at libero quis ipsum sodales laoreet at dignissim justo. Morbi placerat sapien vel fringilla tempus.`
          }} />
        </MaincardDiv>
      </BottomSection>
    </MainPanel>
  )
}
