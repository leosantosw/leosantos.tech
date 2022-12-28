import Link from 'next/link'
import { Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  children: string
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  return (
    <Link as="a" href={href}>
      <Text
        padding="4"
        fontSize="sm"
        fontWeight="semibold"
        display="inline-block"
      >
        {children}
      </Text>
    </Link>
  )
}
