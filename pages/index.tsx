import Head from 'next/head'

import { Header } from '../screens/pattens/Header'
import { Projects } from '../screens/pattens/Projects'
import { ContentWrapper } from '../screens/pattens/ContentWrapper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Santos - Software Engineer</title>
      </Head>
      <Header />

      <ContentWrapper />

      <Projects />
    </>
  )
}
