import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerList = styled.div`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const UlFoodList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${cores.bgSecondary};
  padding: 32px;
  display: flex;

  @media (max-width: 768px) {
    width: 80%;
    display: grid;
  }

  header {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 8px;
    right: 8px;
    width: 100%;

    img {
      cursor: pointer;
    }
  }
`
export const ProductImg = styled.img`
  max-width: 280px;
  width: 100%;
`
export const ProductContent = styled.div`
  padding-left: 24px;
  color: ${cores.bgWhite};

  @media (max-width: 768px) {
    padding-left: 0;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;

    @media (max-width: 768px) {
      padding-top: 12px;
      text-align: center;
    }
  }

  p {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .tag {
    margin: 0;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }
`
