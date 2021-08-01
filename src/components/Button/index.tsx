import * as S from './styles'
import { ButtonProps } from './types'

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant = 'default',
    label,
    icon: Icon,
    leftIcon,
    onClick,
    ...rest
  } = props
  return (
    <S.Container type={type} variant={variant} onClick={onClick} {...rest}>
      {leftIcon && Icon && <Icon size={20} />}
      <S.Label>{label}</S.Label>
      {!leftIcon && Icon && <Icon size={20} />}
    </S.Container>
  )
}
