import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  return (
    <Link href={link} passHref target="_blank">
      <Card
        direction="row"
        overflow="hidden"
        variant="outline"
        borderColor={isDarkMode ? 'inherit' : 'blue.600'}
        _hover={{
          boxShadow: 'lg',
          transform: 'translateY(-4px)',
          transition: 'all 0.2s'
        }}
      >
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>
            <Text py="2">{description}</Text>
          </CardBody>
        </Stack>
      </Card>
    </Link>
  )
}
