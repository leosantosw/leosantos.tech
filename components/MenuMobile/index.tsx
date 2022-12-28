import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { Browser, House, Info, List } from 'phosphor-react'

export function MenuMobile() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<List size={22} />}
        variant="outline"
        marginX={4}
      />
      <MenuList>
        <MenuItem icon={<House size={18} />}>Home</MenuItem>
        <MenuItem icon={<Info size={18} />}>About</MenuItem>
        <MenuItem icon={<Browser size={18} />}>Blog</MenuItem>
      </MenuList>
    </Menu>
  )
}
