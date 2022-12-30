import Link from 'next/link'
import Image from 'next/image'
import { Text, Container, Stack, useColorMode, Box } from '@chakra-ui/react'

import { GetDayOfWeek } from '../../utils/GetDayOfWeek'
import rocketImg from '../../public/assets/rocket-launch.svg'

export function ContentWrapper() {
  const dayOfWeek = GetDayOfWeek()
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  const gradientColorText = isDarkMode
    ? 'linear(to-l, gray.50, blue.800)'
    : 'linear(to-l, #253c9c, #2d3142)'

  const gradientColorLink = isDarkMode
    ? 'linear(to-l, gray.400, green.500)'
    : 'linear(to-l, gray.800, green.700)'

  return (
    <Container
      p={2}
      maxWidth="720px"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Stack p={[8, 6, 0]} spacing={-2} align="flex-start">
        <Text
          bgGradient={gradientColorText}
          bgClip="text"
          fontSize={['3xl', '5xl']}
          fontWeight="extrabold"
          letterSpacing="8"
          textAlign="justify"
        >
          Happy {dayOfWeek}!
        </Text>

        <Box display="flex" gap={4}>
          <Text
            bgGradient={gradientColorText}
            bgClip="text"
            fontSize={['3xl', '5xl']}
            fontWeight="extrabold"
            textAlign="justify"
            letterSpacing="8"
          >
            I&apos;m Leo Santos
          </Text>
          <Image src={rocketImg} width={50} height={50} alt="Rocket" />
        </Box>

        <Text
          py={4}
          fontSize={['1xl', '2xl']}
          fontWeight="light"
          textAlign="justify"
        >
          Software Developer at{' '}
          <Link href="https://www.marche.com.br" target="_blank">
            <Text
              as="span"
              fontWeight="semibold"
              bgGradient={gradientColorLink}
              bgClip="text"
              textDecoration="underline"
            >
              St Marche
            </Text>
          </Link>
        </Text>
      </Stack>
    </Container>
  )
}
