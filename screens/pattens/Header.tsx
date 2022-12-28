import Link from 'next/link'
import Image from 'next/image'
import { Container, Flex } from '@chakra-ui/react'

import { NavLink } from '../../components/NavLink'
import { ToggleTheme } from '../../components/ToggleTheme'
import { GradientLine } from '../../components/GradientLine'

export function Header() {
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
        width="full"
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

        <Flex>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Blog</NavLink>
        </Flex>

        <ToggleTheme />
      </Container>
    </Flex>
  )
}
