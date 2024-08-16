//Função de formatação de preço para Real Brasileiro
export const priceFormat = (price: number | undefined): string => {
  if (price === undefined) return ''
  return price.toFixed(2).replace('.', ',')
}
