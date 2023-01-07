import { Container, Stack, Text, useColorMode } from '@chakra-ui/react'
import { ProjectCard } from '../../components/ProjectCard'

export function Projects() {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  return (
    <Container
      px={[8, 4, 2]}
      maxWidth="720px"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="extrabold"
        letterSpacing="8"
        textAlign="justify"
        py="4"
        color={isDarkMode ? 'gray.50' : 'blue.900'}
      >
        Projects
      </Text>

      <Stack spacing="4">
        <ProjectCard
          title="Microsservice Lex"
          description="Microsservice to use Amazon Lex"
          link="https://github.com/leosantosw/microservice-lex"
        />
        <ProjectCard
          title="ECS with Terraform"
          description="Terraform template for AWS ECS/Fargate setup"
          link="https://github.com/leosantosw/ecs-terraform"
        />
        <ProjectCard
          title="My portfolio website"
          description="This is a Next.js portfolio built with Chakra UI and TypeScript."
          link="https://github.com/leosantosw/leosantos.tech"
        />
      </Stack>
    </Container>
  )
}
