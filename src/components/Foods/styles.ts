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
  font-size: 16px;
  font-weight: 900;
  color: ${cores.bgFooter};
`

export const Text = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.bgFooter};
`
