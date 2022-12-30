import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from '@chakra-ui/react'

import { Browser, House, Info, List } from 'phosphor-react'

import useSound from 'use-sound'
import bubbleSound from '../../public/sounds/bubble-blip.mp3'

export function MenuMobile() {
  const [playSound] = useSound(bubbleSound)

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<List size={22} />}
        variant="outline"
        marginX={4}
        onClick={() => playSound()}
      />
      <MenuList>
        <MenuItem icon={<House size={18} />}>Home</MenuItem>
        <MenuItem icon={<Info size={18} />}>About</MenuItem>
        <MenuItem icon={<Browser size={18} />}>Blog</MenuItem>
      </MenuList>
    </Menu>
  )
}
