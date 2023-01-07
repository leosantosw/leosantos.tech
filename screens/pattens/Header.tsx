import Link from 'next/link'
import Image from 'next/image'
import { Box, Container, Flex, useBreakpointValue } from '@chakra-ui/react'

import { NavLink } from '../../components/NavLink'
import { ToggleTheme } from '../../components/ToggleTheme'
import { GradientLine } from '../../components/GradientLine'
import { MenuMobile } from '../../components/MenuMobile'

export function Header() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  return (
    <Flex
      as="header"
      top={0}
      width="full"
      zIndex="docked"
      position="sticky"
      direction="column"
      backgroundColor="var(header-background)"
      css={{ backdropFilter: 'saturate(180%) blur(20px)' }}
    >
      <GradientLine />
      <Container
        width="80vw"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY={6}
        maxWidth="720px"
      >
        <Flex display="flex">
          <Link href="/">
            <Image
              alt="Leonardo Logo"
              src="/assets/logo.png"
              width={isMobileVersion ? 30 : 50}
              height={isMobileVersion ? 30 : 50}
              priority
            />
          </Link>
        </Flex>

        {!isMobileVersion && (
          <Flex>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </Flex>
        )}

        <Box display="flex" flexDir="row">
          {isMobileVersion && <MenuMobile />}
          <ToggleTheme />
        </Box>
      </Container>
    </Flex>
  )
}
