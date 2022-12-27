import { Box } from '@chakra-ui/react'

export function GradientLine() {
  return (
    <Box
      as="div"
      bgGradient="linear(to-r, blue.600, blue.300)"
      h={4}
      w="full"
    />
  )
}
