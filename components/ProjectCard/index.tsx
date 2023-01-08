import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import Link from 'next/link'
import useSound from 'use-sound'
import biteSound from '../../public/sounds/bite.mp3'

type ProjectCardProps = {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  const [play] = useSound(biteSound)

  function handlePlaySound() {
    play()
  }

  return (
    <Link href={link} passHref target="_blank">
      <Card
        onMouseEnter={handlePlaySound}
        direction="row"
        overflow="hidden"
        variant="outline"
        borderColor={isDarkMode ? 'inherit' : 'blue.600'}
        _hover={{
          boxShadow: 'lg',
          transform: 'scale(1.02)',
          transition: 'all .5s'
        }}
      >
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2.5">{description}</Text>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  )
}
