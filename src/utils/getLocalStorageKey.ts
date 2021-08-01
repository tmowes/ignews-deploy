import { LOCAL_STORAGE_KEY } from '~/constants'

const getLocalStorageKey = (key?: string) =>
  key ? `${LOCAL_STORAGE_KEY}: ${key}` : `${LOCAL_STORAGE_KEY}`

export default getLocalStorageKey
