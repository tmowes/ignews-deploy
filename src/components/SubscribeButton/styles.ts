import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme: { colors, shadows } }) => css`
    background-color: ${colors.yellow5};
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: ${shadows.default};
    box-shadow: ${shadows.default};
    transition: 180ms ease-in-out;
    padding: 0 2rem;
    border-radius: 2rem;
    margin-top: 2.5rem;
    :disabled {
      cursor: not-allowed;
    }
    :not(:disabled):hover {
      filter: brightness(1.12);
      transform: scale(1.01);
    }
    :active {
      transform: scale(0.99);
    }
  `}
`

export const Label = styled.strong`
  ${({ theme: { colors } }) => css`
    color: ${colors.gray9};
    line-height: 4rem;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0;
    transition: 180ms ease-in-out;
  `}
`
