import React, { useState } from 'react'
import {
  Main, TitleSidebar, Menu,
  ItemsMenu, ProfilePic, ProfileDiv,
  ProfileName, ProfileEmail, Desktop, Mobile,
  MainMobile, HamburgIcon, TitleSidebarMobile,
  MenuMobile,
  ItemsMenuMobile,
  ProfileDivMobile,
  ProfilePicMobile,
  ProfileNameMobile,
  ProfileEmailMobile
} from './Sidebar.styled'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {

  const [isOpen, setOpen] = useState(false)
  const toggleMode = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <>
      <Desktop>
        <Main>
          <TitleSidebar>BigDashboard</TitleSidebar>
          <Menu>
            <ItemsMenu selected={true}>Painel</ItemsMenu>
            <ItemsMenu>Projetos</ItemsMenu>
            <ItemsMenu>Leeads</ItemsMenu>
            <ItemsMenu>Campanhas</ItemsMenu>
            <ItemsMenu>Notificações</ItemsMenu>
          </Menu>

          <ProfileDiv>
            <ProfilePic icon={faUser} />
            <ProfileName>User Name</ProfileName>
            <ProfileEmail>user@email.com</ProfileEmail>
          </ProfileDiv>
        </Main>
      </Desktop>

      <Mobile>
        <MainMobile active={isOpen}>
          <HamburgIcon onClick={toggleMode} icon={faBars}></HamburgIcon>
          <TitleSidebarMobile active={isOpen}>BigDashboard</TitleSidebarMobile>
          <MenuMobile active={isOpen}>
            <ItemsMenuMobile selected={true}>Painel</ItemsMenuMobile>
            <ItemsMenuMobile>Projetos</ItemsMenuMobile>
            <ItemsMenuMobile>Leeads</ItemsMenuMobile>
            <ItemsMenuMobile>Campanhas</ItemsMenuMobile>
            <ItemsMenuMobile>Notificações</ItemsMenuMobile>
          </MenuMobile>
          <ProfileDivMobile active={isOpen}>
            <ProfilePicMobile active={isOpen} icon={faUser} />
            <ProfileNameMobile active={isOpen}>User Name</ProfileNameMobile>
            <ProfileEmailMobile active={isOpen}>user@email.com</ProfileEmailMobile>
          </ProfileDivMobile>
        </MainMobile>
      </Mobile>
    </>
  )
}
