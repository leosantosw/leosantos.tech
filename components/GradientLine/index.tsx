import { Box } from '@chakra-ui/react'

export function GradientLine() {
  return (
    <Box
      as="div"
      // bgGradient="linear(to-r, blue.600, blue.300)"
      bgGradient="linear(to-l, blue.600, #7928CA)"
      h={4}
      w="full"
    />
  )
}
