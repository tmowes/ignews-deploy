import { shade, tint } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme: { colors } }) => css`
  :root {
    --background: #2b2735;
    --shape: #3c3847;
    --text-title: #f0f2f5;
    --text-body: #f0f2f5cc;
    --inputs: #211e29;
    --red: #e52e4d;
    --green: #04d361;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --white: #ffffff;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-800: #29292e;
    --gray-900: #121214;
    --cyan-500: #61dafb;
    --yellow-500: #eba417;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html {
    font-size: 100%;
    height: 100%;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.inputs};
    color: ${colors.white};
  }
  body,
  #__next {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
  }
  #__next {
    height: 100%;
  }
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Roboto', -apple-system, sans-serif;
    line-height: 1.25;
    border: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }
  a {
    text-decoration: none;
    background: none;
    font-weight: 500;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
    color: inherit;
    color: ${colors.white};
    :hover {
      /* color: ${tint(0.16, colors.white)}; */
      /* text-decoration: underline; */
    }
    :active {
      /* color: ${shade(0.16, colors.white)}; */
      /* text-decoration: underline; */
    }
  }
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`}
`
