import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCard = styled.div`
  max-width: 320px;
  width: 100%;
  border: 1px solid ${cores.bgSecondary};
  background-color: ${cores.bgSecondary};
  position: relative;
  padding: 8px 8px;
`
export const ImgProduct = styled.img`
  width: 100%;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${cores.bgFooter};
`

export const Text = styled.p`
  margin: 16px 8px;
  text-align: justify;
  color: ${cores.bgFooter};
`
