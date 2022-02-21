import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Robson Scatolon</Text>

          <Text color="gray.300" fontSize="small">
            robsonscatolon@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Robson Scatolon" />
    </Flex>
  );
}
