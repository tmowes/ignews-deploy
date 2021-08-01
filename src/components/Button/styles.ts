import styled, { css } from 'styled-components'

import { VariantStyledProps } from './types'
import { variants } from './variants'

export const Container = styled.button<VariantStyledProps>`
  ${({ variant, theme: { shadows } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 0.5rem;
    margin: 0.8rem 0;
    height: 5rem;
    width: 100%;
    -webkit-box-shadow: ${shadows.default};
    box-shadow: ${shadows.default};
    transition: 180ms ease-in-out;
    :disabled {
      cursor: not-allowed;
    }

    :not(:disabled):hover {
      transform: scale(1.01);
    }
    :active {
      transform: scale(0.99);
    }
    ${variant && variants[variant]};
  `}
`

export const Label = styled.strong`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 0;
`
