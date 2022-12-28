import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Text,
  LinkProps as ChakraLinkProps,
  Link,
  useColorMode
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  children: string
  href: string
}

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  const router = useRouter()
  const { colorMode } = useColorMode()

  const isActive = router.pathname === href
  const colorActiveMenuItem = colorMode === 'light' ? 'gray.800' : 'blue.400'

  return (
    <Link as={NextLink} href={href} {...rest} passHref>
      <Text
        padding="8"
        fontSize="lg"
        fontWeight={isActive ? 'bold' : 'semibold'}
        color={isActive ? colorActiveMenuItem : 'inherit'}
        _hover={{
          textDecoration: 'underline',
          color: 'var(--chakra-colors-gray-700)'
        }}
      >
        {children}
      </Text>
    </Link>
  )
}
