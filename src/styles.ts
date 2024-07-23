import { createGlobalStyle } from 'styled-components'

export const cores = {
  bgPrimary: '#FFF8F2',
  bgFooter: '#FFEBD9',
  bgWhite: '#FFFFFF',
  bgSecondary: '#E66767'
}
export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.bgPrimary};
    color: ${cores.bgSecondary}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 80%;
    }

      @media (max-width: 1024px) {
      width: 80%;
    }
  }
`
