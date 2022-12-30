import Image from 'next/image'
import useSound from 'use-sound'
import sunImg from '../../public/assets/sun.svg'
import moonImg from '../../public/assets/moon.svg'
import { Button, useColorMode } from '@chakra-ui/react'
import switchOn from '../../public/sounds/switch-on.mp3'
import switchOff from '../../public/sounds/switch-off.mp3'

export function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  const [playSound] = useSound(isDarkMode ? switchOff : switchOn)

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
