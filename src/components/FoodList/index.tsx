import {
  ContainerList,
  Modal,
  ModalContent,
  ProductContent,
  ProductImg,
  UlFoodList
} from './styles'
import Foods from '../Foods'
import close from '../../assets/images/close.png'
import Tag from '../Tag'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  foodsType: RestaurantsType
}

//Função de formatação de preço para Real Brasileiro
export const priceFormat = (price: number | undefined): string => {
  if (price === undefined) return ''
  return price.toFixed(2).replace('.', ',')
}

const FoodList = ({ foodsType }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [selectedFoodId, setSelectedFoodId] = useState<
    RestaurantsType['cardapio'][0] | null
  >(null)

  const dispatch = useDispatch()

  //Função para adicionar o produto ao carrinho
  const addToCart = () => {
    dispatch(open())
    if (selectedFoodId) {
      dispatch(
        add({
          ...foodsType,
          cardapio: [selectedFoodId]
        })
      )
    }
  }
  //Funções de abrir e fechar o modal
  const handleOpenModal = (food: RestaurantsType['cardapio'][0]) => {
    setModalAberto(true)
    setSelectedFoodId(food)
  }
  const handleCloseModal = () => {
    setModalAberto(false)
    setSelectedFoodId(null)
  }

  //Funções para fechar o modal ao pressionar esc no teclado
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <div className="container">
        <ContainerList>
          <UlFoodList>
            {foodsType.cardapio.map((r) => (
              <Foods
                key={r.id}
                id={r.id}
                foto={r.foto}
                nome={r.nome}
                descricao={r.descricao}
                porcao={r.porcao}
                preco={r.preco}
                onClick={() => handleOpenModal(r)} //Props atribuida dentro de Foods para a Tag (Botão)
              />
            ))}
          </UlFoodList>
        </ContainerList>
      </div>

      <Modal className={modalAberto ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img src={close} alt="Botão fechar" onClick={handleCloseModal} />
          </header>
          {selectedFoodId && (
            <>
              <ProductImg src={selectedFoodId.foto} alt="Produto" />
              <ProductContent>
                <h3>{selectedFoodId.nome}</h3>
                <p>{selectedFoodId.descricao}</p>
                <p>Serve: de {selectedFoodId.porcao}</p>
                <Tag type="button" className="tag" onClick={addToCart}>
                  Adicionar ao Carrinho - R$ {priceFormat(selectedFoodId.preco)}
                </Tag>
              </ProductContent>
            </>
          )}
        </ModalContent>
        <div className="overlay" onClick={handleCloseModal}></div>
      </Modal>
    </>
  )
}

export default FoodList
