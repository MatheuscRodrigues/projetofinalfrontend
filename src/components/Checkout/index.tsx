import { SideBar, Row, InputGroup, OverlayCheckout } from './styles'
import Tag from '../Tag'
import { CartContainer } from '../Cart/styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  backtoCart,
  close,
  closeAndFinish,
  confirmed,
  payment,
  startCheckout
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { IMaskInput } from 'react-imask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { priceFormat } from '../../utils'

type Props = {
  checkoutStart?: boolean
  totalPrice: number
}

const Checkout = ({ checkoutStart = false, totalPrice = 0 }: Props) => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const { isPayment, isConfirmed } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const returnCart = () => {
    dispatch(backtoCart())
  }

  const goToPayment = () => {
    if (
      form.values.name &&
      form.values.address &&
      form.values.city &&
      form.values.zipCode &&
      form.values.addressNumber
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const returnAddress = () => {
    dispatch(startCheckout())
  }

  const confirmedOrder = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cvv &&
      form.values.expirationYear &&
      form.values.expirationMonth
    ) {
      dispatch(confirmed())
      form.handleSubmit()
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }
  const finish = () => {
    form.resetForm()
    dispatch(closeAndFinish())
  }

  //Validações com formik

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string().required('Campo obrigatório'),
      addressNumber: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      expirationMonth: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      expirationYear: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log('Submitting form with values:', values)
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            city: values.city,
            description: values.address,
            number: Number(values.addressNumber),
            zipCode: values.zipCode,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expirationMonth),
              year: Number(values.expirationYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  const getErrorMessage = (campo: string, message?: string) => {
    const estaAlterado = campo in form.touched
    const estaInvalido = campo in form.errors
    if (estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer className={checkoutStart ? 'is-open' : ''}>
        <OverlayCheckout onClick={closeCart} />
        <SideBar>
          <h3>Entrega</h3>
          <Row>
            <InputGroup>
              <label htmlFor="name">Quem irá receber</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('name', form.errors.name)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('address', form.errors.address)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('city', form.errors.city)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup maxWidth="145px">
              <label htmlFor="zipCode">CEP</label>
              <IMaskInput
                mask="00.000-000"
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
            </InputGroup>
            <InputGroup maxWidth="145px">
              <label htmlFor="addressNumber">Número</label>
              <input
                type="text"
                id="addressNumber"
                name="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('addressNumber', form.errors.addressNumber)}
              </small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="lastInputGroup">
              <label htmlFor="complement">Complemento (opicional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
          </Row>
          <Tag type="submit" className="tag" onClick={goToPayment}>
            Continuar com o pagamento
          </Tag>
          <Tag type="button" className="tag" onClick={returnCart}>
            Voltar para o carrinho
          </Tag>
        </SideBar>
      </CartContainer>

      <CartContainer className={isPayment ? 'is-open' : ''}>
        <OverlayCheckout onClick={closeCart} />
        <SideBar>
          <h3>Pagamento - Valor a pagar R$ {priceFormat(totalPrice)}</h3>
          <Row>
            <InputGroup>
              <label htmlFor="cardName">Nome do cartão</label>
              <input
                type="text"
                required
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cardName', form.errors.cardName)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <IMaskInput
                mask="0000.0000.0000.0000"
                type="text"
                required
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </InputGroup>
            <InputGroup maxWidth="60px">
              <label htmlFor="cvv">CVV</label>
              <IMaskInput
                mask="000"
                type="text"
                required
                id="cvv"
                name="cvv"
                value={form.values.cvv}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup maxWidth="145px">
              <label htmlFor="expirationMonth">Mês de vencimento</label>
              <IMaskInput
                mask="00"
                type="text"
                required
                id="expirationMonth"
                name="expirationMonth"
                value={form.values.expirationMonth}
                onChange={form.handleChange}
                onBlur={(e) => {
                  form.handleBlur(e)
                  const value = Number(e.target.value)
                  if (value < 1) {
                    form.setFieldValue('expirationMonth', '1')
                  } else if (value > 12) {
                    form.setFieldValue('expirationMonth', '12')
                  }
                }}
              />
              <small>
                {getErrorMessage(
                  'expirationMonth',
                  form.errors.expirationMonth
                )}
              </small>
            </InputGroup>
            <InputGroup className="lastInputGroup" maxWidth="145px">
              <label htmlFor="expirationYear">Ano de vencimento</label>
              <IMaskInput
                mask="00"
                type="text"
                required
                id="expirationYear"
                name="expirationYear"
                value={form.values.expirationYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expirationYear', form.errors.expirationYear)}
              </small>
            </InputGroup>
          </Row>
          <Tag type="submit" className="tag" onClick={confirmedOrder}>
            Finalizar pagamento
          </Tag>
          <Tag type="button" className="tag" onClick={returnAddress}>
            Voltar para a edição do endereço
          </Tag>
        </SideBar>
      </CartContainer>

      <CartContainer className={isConfirmed && isSuccess ? 'is-open' : ''}>
        <OverlayCheckout onClick={closeCart} />
        <SideBar>
          <h3>Pedido realizado - {data?.orderId} </h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>

          <Tag type="submit" onClick={finish} className="tag">
            Concluir
          </Tag>
        </SideBar>
      </CartContainer>
    </form>
  )
}

export default Checkout
