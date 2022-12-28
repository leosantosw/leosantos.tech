import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from '../components/NavLink'
import { GradientLine } from '../components/GradientLine'
import { Container, Flex, Text } from '@chakra-ui/react'
import { ToggleTheme } from '../components/ToggleTheme'

export default function Home() {
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
      <Container
        p={4}
        maxWidth="720px"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Text fontSize="5xl" fontWeight="extrabold">
          Happy Monday!
        </Text>
        <Text fontSize="4xl" fontWeight="bold">
          I&apos;m Leo Santos 🚀
        </Text>
        <Text fontSize="lg" fontWeight="light">
          Software Developer at{' '}
          <Link href="https://www.marche.com.br" target="_blank">
            <Text
              as="span"
              fontWeight="semibold"
              color="green.500"
              textDecoration="underline"
            >
              St Marche
            </Text>
          </Link>
        </Text>
      </Container>
    </Flex>
  )
}
