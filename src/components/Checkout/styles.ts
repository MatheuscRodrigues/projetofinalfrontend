import styled from 'styled-components'
import { cores } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const DeliveryContainer = styled.div`
  display: none;
  &.show {
    display: block;
  }
`

export const OverlayCheckout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
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

  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${cores.bgFooter};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${cores.bgFooter};
    margin-bottom: 24px;
    line-height: 22px;
    text-align: justify;
  }

  .tag {
    width: 100%;
    margin: 4px auto;
  }

  .lastInputGroup {
    margin-bottom: 24px;
  }

  small {
    color: yellow;
    font-size: 11px;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 36px;
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    margin: 8px 0;
    color: ${cores.bgFooter};
    display: block;
  }

  input {
    width: 100%;
    height: 32px;
    border: 2px solid ${cores.bgSecondary};
    background-color: ${cores.bgFooter};
    padding-left: 8px;
  }

  input:focus {
    border-color: #9e4747;
    outline: none;
  }
`
