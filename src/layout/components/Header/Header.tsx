import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import type { HeaderProps } from "./types";

export const Header = ({ appName = "Chakra App" }: HeaderProps) => (
  <Box width="100%" height="7rem" padding="1.5rem">
    <Flex minWidth="max-content" justifyContent="space-between" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">{appName}</Heading>
      </Box>
      <Spacer/>
      <ButtonGroup gap="2">
        <Button colorScheme="teal">{"Sign Up"}</Button>
        <Button colorScheme="teal">{"Log in"}</Button>
      </ButtonGroup>
    </Flex>
  </Box>
);
