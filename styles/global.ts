import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './theme/colors'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

export const theme = extendTheme({
  colors,
  config,
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  styles: {
    global: {
      body: {
        height: '100vh',
        _dark: {
          bg: 'gray.800',
          color: 'gray.50'
        },
        _light: {
          bg: 'gray.50',
          color: 'gray.600'
        }
      },
      link: {
        _dark: {
          bg: 'gray.800',
          color: 'gray.50'
        },
        _light: {
          bg: 'gray.50',
          color: 'gray.800'
        }
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
