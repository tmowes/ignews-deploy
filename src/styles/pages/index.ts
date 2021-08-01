import styled, { css } from 'styled-components'

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Greetings = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Title = styled.h1`
  ${({ theme: { colors } }) => css`
    font-size: 4.5rem;
    text-align: left;
    font-weight: 900;
    line-height: 4.5rem;
    margin-top: 2.5rem;
    color: ${colors.white};
  `}
`

export const React = styled.span`
  ${({ theme: { colors } }) => css`
    color: ${colors.cyan5};
  `}
`
export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;
  margin-top: 1.5rem;
`

export const Text = styled.p`
  ${({ theme: { colors } }) => css`
    color: ${colors.cyan5};
    font-weight: bold;
  `}
`

export const Section = styled.section`
  max-width: 600px;
`

export const HeroImage = styled.img``
