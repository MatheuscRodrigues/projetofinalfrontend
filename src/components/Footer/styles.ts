import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.div`
  background-color: ${cores.bgFooter};
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
export const TextFooter = styled.p`
  max-width: 480px;
  width: 100%;
  text-align: center;
  font-size: 10px;
  margin-top: 80px;
  margin-bottom: 40px;
`
export const LogoContainer = styled.img`
  margin-top: 40px;
  margin-bottom: 32px;
`
