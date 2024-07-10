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

export type FoodItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Props = {
  foodsType: FoodItem[]
}

//Função de formatação de preço para Real Brasileiro
const priceFormat = (price: number | undefined): string => {
  if (price === undefined) return ''
  return price.toFixed(2).replace('.', ',')
}

const FoodList = ({ foodsType }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [selectedFoodId, setSelectedFoodId] = useState(0)

  //Funções de abrir e fechar o modal
  const handleOpenModal = (id: number) => {
    setModalAberto(true)
    setSelectedFoodId(id)
  }
  const handleCloseModal = () => {
    setModalAberto(false)
    setSelectedFoodId(0)
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
            {foodsType.map((r) => (
              <Foods
                key={r.id}
                id={r.id}
                foto={r.foto}
                nome={r.nome}
                descricao={r.descricao}
                porcao={r.porcao}
                preco={r.preco}
                onClick={() => handleOpenModal(r.id)} //Props atribuida dentro de Foods para a Tag (Botão)
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
          <ProductImg
            src={foodsType.find((item) => item.id === selectedFoodId)?.foto}
            alt="Produto"
          />
          <ProductContent>
            <h3>
              {foodsType.find((item) => item.id === selectedFoodId)?.nome}
            </h3>
            <p>
              {foodsType.find((item) => item.id === selectedFoodId)?.descricao}
            </p>
            <p>
              Serve: de{' '}
              {foodsType.find((item) => item.id === selectedFoodId)?.porcao}
            </p>
            <Tag type="button" className="tag">
              Adicionar ao Carrinho - R$
              {priceFormat(
                foodsType.find((item) => item.id === selectedFoodId)?.preco
              )}
            </Tag>
          </ProductContent>
        </ModalContent>
        <div className="overlay" onClick={handleCloseModal}></div>
      </Modal>
    </>
  )
}

export default FoodList
