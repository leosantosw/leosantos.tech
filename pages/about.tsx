import {
  Box,
  Container,
  Flex,
  Text,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../screens/pattens/Header'

import profileImg from '../public/assets/profile.jpg'

export default function About() {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  const gradientColorText = isDarkMode
    ? 'linear(to-l, gray.50, blue.600)'
    : 'linear(to-l, blue.600, gray.700)'

  return (
    <>
      <Head>
        <title>Leo Santos - About Me</title>
      </Head>

      <Header />

      <Container
        p={6}
        maxWidth="800px"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Text
          bgGradient={gradientColorText}
          bgClip="text"
          fontSize={['3xl', '5xl']}
          fontWeight="extrabold"
          letterSpacing="8"
          textAlign="justify"
        >
          About Me
        </Text>

        <Flex flexDir="column" py="4">
          <Flex justifyContent="space-around" alignItems="center">
            <Text
              textAlign="justify"
              py="4"
              pr={['0', '6']}
              fontSize={['larger', '2xl']}
            >
              I&apos;m Leo Santos, a software engineer 💻 with over 2 years of
              experience in the industry 🌟. I specialize in building scalable
              and reliable systems using modern technologies such as
              microservices and front-end applications 🎨.
            </Text>

            {!isMobileVersion && (
              <Box width="100vw">
                <Image
                  style={{
                    objectFit: 'cover',
                    borderRadius: '100%',
                    width: '200px',
                    height: '200px'
                  }}
                  placeholder="blur"
                  src={profileImg}
                  alt="image profile"
                  priority
                />
              </Box>
            )}
          </Flex>

          <Text textAlign="justify" fontSize={['larger', '2xl']}>
            I am currently focused on developing new and innovative solutions
            using cutting-edge technologies 🦄, with a particular interest in
            cloud native applications 🌩.
          </Text>
        </Flex>
      </Container>

      <Footer />
    </>
  )
}
