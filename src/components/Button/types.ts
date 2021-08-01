import { ButtonHTMLAttributes, ComponentType } from 'react'

import type { IconBaseProps } from 'react-icons'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  variant?: Variants
  icon?: ComponentType<IconBaseProps>
  isActive?: boolean
  leftIcon?: boolean
}

export type VariantStyledProps = {
  variant?: Variants
}

export type Variants =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'cancel'
  | undefined
