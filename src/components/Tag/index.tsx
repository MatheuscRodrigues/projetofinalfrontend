import { ButtonLink, ContainerTag } from './styles'

export type Props = {
  size?: 'small' | 'big'
  use?: 'restaurants' | 'product'
  bgColor?: 'primary' | 'secondary'
  fontColor?: 'primary' | 'secondary'
  children?: React.ReactNode
  onClick?: () => void
  type: 'button' | 'tag'
  to?: string
  className?: string
}

const Tag = ({
  size = 'big',
  use,
  children,
  onClick,
  type,
  to,
  bgColor,
  fontColor,
  className
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonLink
        type="button"
        size={size}
        use={use}
        onClick={onClick}
        to={to as string}
        bgColor={bgColor}
        fontColor={fontColor}
        className={className}
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
      className={className}
    >
      {children}
    </ContainerTag>
  )
}

export default Tag
