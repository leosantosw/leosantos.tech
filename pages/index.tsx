import Link from 'next/link'
import Image from 'next/image'
import sunImg from '../public/assets/sun.svg'
import moonImg from '../public/assets/moon.svg'
import { NavLink } from '../components/NavLink'
import { GradientLine } from '../components/GradientLine'
import { Button, Container, Flex, Text, useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

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

        <Flex>
          <Button
            p="1"
            h="40px"
            display="flex"
            variant="unstyled"
            alignItems="center"
            justifyContent="center"
            onClick={toggleColorMode}
          >
            <Image
              width={34}
              height={34}
              src={colorMode == 'dark' ? moonImg : sunImg}
              alt="switch theme"
            />
          </Button>
        </Flex>
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
