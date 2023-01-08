import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import Link from 'next/link'

import { Browser, House, Info, List, X } from 'phosphor-react'

import useSound from 'use-sound'
import bubbleSound from '../../public/sounds/bubble-blip.mp3'

export function MenuMobile() {
  const [playSound] = useSound(bubbleSound)

  return (
    <Menu onOpen={playSound} onClose={playSound}>
      {({ isOpen }) => (
        <>
          <MenuButton
            colorScheme="white"
            as={IconButton}
            aria-label="Options"
            icon={isOpen ? <X size={20} /> : <List size={22} />}
            variant="outline"
            marginX={4}
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<House size={18} />}>Home</MenuItem>
            </Link>
            <Link href="/about" passHref>
              <MenuItem icon={<Info size={18} />}>About</MenuItem>
            </Link>
            <Link href="https://dev.to/leosantosw" target="_blank">
              <MenuItem icon={<Browser size={18} />}>Blog</MenuItem>
            </Link>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
