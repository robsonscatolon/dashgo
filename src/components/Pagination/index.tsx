import { Box, Stack, HStack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  totalCountOfRecords: number;
  recordsPerPage: number;
  onPageChange: (page: number) => void;
}

const SIMBLINGS_NUMBER = 1;

function generatePages(from: number, to: number, lastPage: number): number[] {
  const numberIndexes: number = to - from;
  let array: number[] = [];

  for (let current = from; current <= to; current++) {
    array.push(current);
  }

  array = !array.includes(1) ? new Array(1, ...array) : array;
  array = !array.includes(lastPage) ? new Array(...array, lastPage) : array;

  return array.filter((page) => page > 0 && page <= lastPage);
}

export function Pagination({
  currentPage,
  totalCountOfRecords,
  recordsPerPage,
  onPageChange,
}: PaginationProps): JSX.Element {
  const lastPage = Math.ceil(totalCountOfRecords / recordsPerPage);

  const pages = generatePages(
    currentPage - SIMBLINGS_NUMBER,
    currentPage + SIMBLINGS_NUMBER,
    lastPage
  );

  let prevPage = 1;

  return (
    <Stack
      direction={["column", "row"]}
      align="center"
      justify="space-between"
      spacing="6"
      mt="8"
    >
      <Box>
        <strong>{(currentPage - 1)  * recordsPerPage}</strong> - <strong>{totalCountOfRecords < (currentPage * recordsPerPage) ? totalCountOfRecords : (currentPage * recordsPerPage)}</strong> de <strong>{totalCountOfRecords}</strong>
      </Box>

      <HStack align="center" justify="space-between" spacing="2">
        {pages.map((page) => {
          const prev = prevPage;
          prevPage = page;
          return prev + 2 <= page ? (
            <>
              <Text color="gray.300" w="8" textAlign="center">
                ...
              </Text>
              <PaginationItem
                key={page}
                isCurrent={page == currentPage}
                number={page}
                onPageChange={onPageChange}
              />
            </>
          ) : (
            <PaginationItem
              key={page}
              isCurrent={page == currentPage}
              number={page}
              onPageChange={onPageChange}
            />
          );
        })}
      </HStack>
    </Stack>
  );
}
