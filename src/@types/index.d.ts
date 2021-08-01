declare module '*.png'
declare module '*.json'

declare module '*.svg' {
  const content: unknown
  export default content
}
