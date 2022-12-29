import Head from 'next/head'
import Link from 'next/link'
import { Text, Container } from '@chakra-ui/react'
import { Header } from '../screens/pattens/Header'
import { GetDayOfWeek } from '../utils/GetDayOfWeek'

export default function Home() {
  const dayOfWeek = GetDayOfWeek()

  return (
    <>
      <Head>
        <title>Leo Santos - Software Engineer</title>
      </Head>
      <Header />
      <Container
        p={4}
        maxWidth="720px"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Text fontSize="5xl" fontWeight="extrabold">
          Happy {dayOfWeek}!
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
    </>
  )
}
