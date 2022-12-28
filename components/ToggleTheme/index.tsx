import Image from 'next/image'
import sunImg from '../../public/assets/sun.svg'
import moonImg from '../../public/assets/moon.svg'
import { Button, useColorMode } from '@chakra-ui/react'

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
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
  )
}
