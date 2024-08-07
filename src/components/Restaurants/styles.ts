import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerCard = styled.div`
  max-width: 472px;
  width: 100%;
  border: 1px solid ${cores.bgSecondary};
  background-color: ${cores.bgWhite};
  position: relative;
  display: flex;
  flex-direction: column;
`
export const ImgProduct = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`
export const Rating = styled.div`
  font-size: 18px;
  font-weight: 700;

  display: flex;
  max-width: 55px;
  width: 100%;
  align-items: top;
  justify-content: space-between;

  p {
    padding-right: 8px;
  }

  img {
    width: 21px;
    height: 20px;
  }
`

export const TitleAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 8px 0 8px;
`
export const Text = styled.p`
  margin: 8px 8px;
  font-size: 14px;
  line-height: 22px;
  flex-grow: 1;
`
export const Infos = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
`
export const ButtonContainer = styled.div`
  margin: 0;
  align-self: flex-start;
`
