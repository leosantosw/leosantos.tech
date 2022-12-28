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
    >
      <GradientLine />
      <Container
        width="80vw"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY={8}
        maxWidth="720px"
      >
        <Flex display="flex">
          <Link href="/">
            <div>
              <Image
                alt="Laura Beatris Logo"
                src="/assets/logo.png"
                width={50}
                height={50}
                priority
              />
            </div>
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
