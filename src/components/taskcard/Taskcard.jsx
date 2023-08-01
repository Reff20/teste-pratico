import React from 'react'
import { Body, Content, Title } from './Taskcard.styled'

export default function Taskcard({title, content}) {
    return (
        <Body>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </Body>
    )
}