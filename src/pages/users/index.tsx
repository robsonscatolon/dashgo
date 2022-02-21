import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList(): JSX.Element {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box flex="1" bg="gray.800" borderRadius={8} p="8">
          <Flex justify="space-between" align="center">
            <Heading size="lg" fontSize="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                bg="pink.500"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "6"]} width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data Cadastro</Th>}
                {isWideVersion && <Th width="8"></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Robson Scatolon</Text>
                    <Text fontSize="sm" color="gray.300">
                      robsonscatolon@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>17 de Fevereiro, 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      bg="purple.500"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Text fontWeight="bold">Robson Scatolon</Text>
                  <Text fontSize="sm" color="gray.300">
                    robsonscatolon@gmail.com
                  </Text>
                </Td>
                {isWideVersion && <Td>17 de Fevereiro, 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      bg="purple.500"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              <Tr>
                <Td px={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Text fontWeight="bold">Robson Scatolon</Text>
                  <Text fontSize="sm" color="gray.300">
                    robsonscatolon@gmail.com
                  </Text>
                </Td>
                {isWideVersion && <Td>17 de Fevereiro, 2022</Td>}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      bg="purple.500"
                      leftIcon={<Icon as={RiPencilLine} />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
