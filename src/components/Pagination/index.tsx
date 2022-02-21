import { Box, Stack, HStack} from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(): JSX.Element {
  return (
    <Stack
      direction={["column", "row"]}
      align="center"
      justify="space-between"
      spacing="6"
      mt="8"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack align="center" justify="space-between" spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </HStack>
    </Stack>
  );
}
