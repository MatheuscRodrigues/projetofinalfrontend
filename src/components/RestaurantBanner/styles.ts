import { styled } from 'styled-components'
import { cores } from '../../styles'

export const HeaderRestaurant = styled.div`
  height: 190px;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: inherit;
    }
  }

  p {
    font-size: 18px;
    font-weight: bold;
  }
`

export const BannerContainer = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .container {
    position: relative;
    z-index: 1;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
  }
`
export const RestaurantType = styled.p`
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;
  padding-top: 25px;
  padding-bottom: 157px;
  color: ${cores.bgWhite};
`
export const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
  color: ${cores.bgWhite};
`
