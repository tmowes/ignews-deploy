import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Article = styled.article`
  max-width: 720px;
  margin: 5rem 0 auto;
`

export const CreatedAt = styled.time`
  ${({ theme: { colors } }) => css`
    display: block;
    font-size: 1rem;
    color: ${colors.gray3};
    margin-top: 1.5rem;
  `}
`

export const PostTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
`

export const Content = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.gray1};
    margin-top: 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    p,
    ul {
      margin: 1.5rem 0;
    }
    ul {
      padding-left: 1.5rem;
      li {
        margin: 0.5rem 0;
      }
    }
  `}
`
export const PreviewContent = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${`linear-gradient(${colors.gray1}, transparent)`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    p,
    ul {
      margin: 1.5rem 0;
    }
    ul {
      padding-left: 1.5rem;
      li {
        margin: 0.5rem 0;
      }
    }
  `}
`
export const ContinueReading = styled.div`
  ${({ theme: { colors } }) => css`
    padding: 2rem;
    text-align: center;
    background: ${colors.gray8};
    border-radius: 100px;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 4rem 0 2rem;
  `}
`

export const Label = styled.a`
  ${({ theme: { colors } }) => css`
    color: ${colors.yellow5};
    margin-left: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  `}
`
