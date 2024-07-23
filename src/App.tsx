import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Footer from './components/Footer'
import Rotas from './routes'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
