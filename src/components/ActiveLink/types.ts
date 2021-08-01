import { LinkProps } from 'next/link'
import { ReactElement } from 'react'

export type ActiveLinkProps = LinkProps & {
  children: ReactElement
}
