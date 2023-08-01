import React from 'react'
import Sidebar from '../components/sidear/Sidebar'
import Panel from '../components/panel/Panel'
import { AppDiv } from '../assets/App.styled'
import Taskbar from '../components/taskbar/Taskbar'

export default function App() {
  return (
    <AppDiv>
        <Sidebar/>
        <Panel />
        <Taskbar />
    </AppDiv>
  )
}
