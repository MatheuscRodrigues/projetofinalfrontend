import styled from 'styled-components'
import { cores } from '../../styles'
import binIcon from '../../assets/images/bin-icon.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.bgSecondary};
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  z-index: 1;
  padding: 32px 8px 0 8px;

  .tag {
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bgFooter};
  padding: 8px;
  max-width: 100%;
  width: 344px;
  position: relative;
  max-height: 100px;
  height: 100%;
  margin-bottom: 16px;

  div {
    padding-left: 8px;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.bgSecondary};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.bgSecondary};
  }

  button {
    background-image: url(${binIcon});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const TotalPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${cores.bgFooter};
  margin-top: 32px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`
