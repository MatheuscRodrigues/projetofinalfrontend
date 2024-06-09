import { ButtonLink, ContainerTag } from './styles'

export type Props = {
  size?: 'small' | 'big'
  use?: 'restaurants' | 'product'
  bgColor?: 'primary' | 'secondary'
  fontColor?: 'primary' | 'secondary'
  children: string
  onClick?: () => void
  type: 'button' | 'tag'
  to?: string
}

const Tag = ({
  size = 'big',
  use,
  children,
  onClick,
  type,
  to,
  bgColor,
  fontColor
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonLink
        type="button"
        size={size}
        use={use}
        onClick={onClick}
        to={to}
        bgColor={bgColor}
        fontColor={fontColor}
      >
        {children}
      </ButtonLink>
    )
  }

  return (
    <ContainerTag
      type="tag"
      size={size}
      use={use}
      bgColor={bgColor}
      fontColor={fontColor}
    >
      {children}
    </ContainerTag>
  )
}

export default Tag
