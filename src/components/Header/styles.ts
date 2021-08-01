import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme: { colors } }) => css`
    height: 5rem;
    border-bottom: 2px solid ${colors.gray8};
  `}
`

export const Content = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`

export const Logo = styled.img``

export const Nav = styled.nav`
  margin-left: 5rem;
  height: 100%;
`

export const Title = styled.a<{ isActive?: boolean }>`
  ${({ isActive, theme: { colors } }) => css`
    display: inline-block;
    position: relative;
    color: ${colors.gray3};
    font-size: 1.2rem;
    padding: 0 0.5rem;
    height: 100%;
    line-height: 5rem;
    &:hover {
      color: ${colors.white};
    }
    &:not(:first-child) {
      margin-left: 2rem;
    }
    ${isActive &&
    css`
      color: ${colors.white};
      font-weight: bold;
      &::after {
        content: '';
        height: 4px;
        width: 100%;
        border-radius: 4px 4px 0 0;
        background: ${colors.yellow5};
        position: absolute;
        bottom: 0;
        left: 0;
      }
    `}
  `}
`
