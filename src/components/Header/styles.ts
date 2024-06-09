import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const Hero = styled.div`
  width: 100%;
  height: 375px;
  padding-top: 30px;
`

export const Title = styled.h1`
  font-size: 36px;
  color: ${cores.bgSecondary};
  max-width: 540px;
  text-align: center;
  padding-top: 140px;
  line-height: 42px;
`
