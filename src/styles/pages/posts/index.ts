import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    color: ${colors.white};
  `}
`
export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Post = styled.div`
  max-width: 720px;
  margin: 5rem 0 auto;
`

export const Link = styled.a`
  ${({ theme: { colors } }) => css`
    display: block;
    &:not(:first-child) {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid ${colors.yellow5};
    }
  `}
`

export const CreatedAt = styled.time`
  ${({ theme: { colors } }) => css`
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: ${colors.gray3};
  `}
`

export const PostTitle = styled.strong`
  ${({ theme: { colors } }) => css`
    display: block;
    font-size: 1.25rem;
    margin-top: 1rem;
    line-height: 2rem;
    transition: 180ms ease-in-out;
    &:hover {
      color: ${colors.yellow5};
    }
  `}
`

export const Content = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.gray3};
    margin-top: 1.25rem;
    line-height: 1.625rem;
  `}
`
