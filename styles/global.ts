import { extendTheme } from '@chakra-ui/react'
import { colors } from './theme/colors'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        height: '100vh',
        color: 'gray.50',
        backgroundColor: 'gray.800'
      },
      p: {
        fontSize: 'xl',
        lineHeight: 'tall'
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold'
      },
      h2: {
        fontSize: '3xl',
        fontWeight: 'bold'
      }
    }
  }
})
