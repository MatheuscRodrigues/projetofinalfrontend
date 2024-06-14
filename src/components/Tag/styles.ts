import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ContainerTag = styled.div<Props>`
  background-color: ${(props) =>
    props.bgColor === 'primary' ? cores.bgSecondary : cores.bgFooter};
  color: ${(props) =>
    props.fontColor === 'primary' ? cores.bgFooter : cores.bgSecondary};
  padding: 6px 4px;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  display: ${(props) =>
    props.use === 'restaurants' ? 'block' : 'inline-block'};
  text-align: center;
  margin: 8px 8px;
`
export const ButtonLink = styled(Link)<Props>`
  background-color: ${(props) =>
    props.bgColor === 'primary' ? cores.bgSecondary : cores.bgFooter};
  color: ${(props) =>
    props.fontColor === 'primary' ? cores.bgFooter : cores.bgSecondary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  display: ${(props) => (props.use === 'product' ? 'block' : 'inline-block')};
  text-align: center;
  margin: ${(props) => (props.use === 'product' ? '8px 0 0 0' : '8px 8px')};
  cursor: pointer;
  text-decoration: none;
`
