import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    margin-top: 40px;
    width: 125px;
  }
`

export const Hero = styled.div`
  width: 100%;
  height: 356px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.bgSecondary};
  max-width: 540px;
  text-align: center;
  padding-top: 140px;
  line-height: 42px;
`
