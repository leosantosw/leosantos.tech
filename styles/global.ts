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
      button: {
        _focus: {
          boxShadow:
            '0 0 1px 3px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
        }
      }
    }
  }
})
