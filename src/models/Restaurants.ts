class RestaurantsClass {
  id: number
  image: string
  title: string
  text: string
  infos: string[]
  route: string

  constructor(
    id: number,
    image: string,
    title: string,
    text: string,
    infos: string[],
    route: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.text = text
    this.infos = infos
    this.route = route
  }
}

export default RestaurantsClass
