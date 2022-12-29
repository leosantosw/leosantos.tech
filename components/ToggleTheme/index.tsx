import Image from 'next/image'
import useSound from 'use-sound'
import sunImg from '../../public/assets/sun.svg'
import moonImg from '../../public/assets/moon.svg'
import { Button, useColorMode } from '@chakra-ui/react'
import darkSound from '../../public/sounds/dark-active.mp3'
import lightSound from '../../public/sounds/light-active.mp3'

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  const [playSound] = useSound(isDarkMode ? lightSound : darkSound)

  function handleOnClick() {
    playSound()
    toggleColorMode()
  }

  return (
    <Button
      p="1"
      h="40px"
      display="flex"
      variant="unstyled"
      alignItems="center"
      justifyContent="center"
      onClick={handleOnClick}
    >
      <Image
        width={34}
        height={34}
        src={isDarkMode ? moonImg : sunImg}
        alt="switch theme"
      />
    </Button>
  )
}
