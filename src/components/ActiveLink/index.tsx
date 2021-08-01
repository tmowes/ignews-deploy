import { useRouter } from 'next/router'
import Link from 'next/link'
import { cloneElement } from 'react'

import { ActiveLinkProps } from './types'

export const ActiveLink = (props: ActiveLinkProps) => {
  const { children, ...rest } = props
  const { asPath } = useRouter()

  const isActive = asPath === rest.href

  return <Link {...rest}>{cloneElement(children, { isActive })}</Link>
}
