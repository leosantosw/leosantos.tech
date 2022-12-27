import Link from 'next/link'
import Image from 'next/image'
import sunImg from '../public/assets/sun.svg'
import { NavLink } from '../components/NavLink'
import { GradientLine } from '../components/GradientLine'
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react'

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

        <Box mt="4">
          <Button
            display="flex"
            variant="unstyled"
            alignItems="center"
            justifyContent="center"
            h="42px"
            p="1"
          >
            <Image width={38} height={38} src={sunImg} alt="switch theme" />
          </Button>
        </Box>
      </Container>
      <Container
        maxWidth="720px"
        p={4}
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Text color="gray.50" fontSize="5xl" fontWeight="extrabold">
          Happy Monday!
        </Text>
        <Text color="gray.50" fontSize="4xl" fontWeight="bold">
          I&apos;m Leo Santos 🚀
        </Text>
        <Text color="white" fontSize="lg" fontWeight="light">
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
