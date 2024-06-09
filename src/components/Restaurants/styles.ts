import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCard = styled.div`
  max-width: 472px;
  width: 100%;
  border: 1px solid ${cores.bgSecondary};
  background-color: ${cores.bgWhite};
  position: relative;
`
export const ImgProduct = styled.img`
  width: 100%;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`
export const Rating = styled.div`
  font-size: 20px;
  font-weight: bold;

  display: flex;
  max-width: 55px;
  width: 100%;
  align-items: top;
  justify-content: space-between;
`

export const TitleAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 0 8px;
`
export const Text = styled.p`
  margin: 16px 8px;
  text-align: justify;
`
export const Infos = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`
