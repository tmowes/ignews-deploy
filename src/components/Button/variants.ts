import { shade, tint } from 'polished'
import { css } from 'styled-components'

export const variants = {
  primary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.orange};
      :not([disabled]):hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  secondary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.nlwBlue};
      :not([disabled]):hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  tertiary: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
      :not([disabled]):hover {
        color: ${tint(0.16, colors.white)};
        background: ${colors.orange};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  cancel: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
      :not([disabled]):hover {
        color: ${tint(0.16, colors.white)};
        background: ${colors.error};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
  default: css`
    ${({ theme: { colors } }) => css`
      color: ${colors.white};
      background: ${colors.shape};
      :not([disabled]):hover {
        color: ${tint(0.16, colors.white)};
      }
      :active {
        color: ${shade(0.16, colors.white)};
      }
    `}
  `,
}
