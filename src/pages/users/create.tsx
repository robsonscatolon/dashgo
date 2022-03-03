import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Forms/Input";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/Sidebar";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type CreateUserFormData = {
  name: string,
  email: string;
  password: string;
};

const CreateUsersSchemaValidation = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória").min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUsers(): JSX.Element {
  const router = useRouter();

  const createUser = useMutation(async (user: CreateUserFormData) => { 
    const response = await api.post('users', {
      user: {
        name: user.name,
        password: user.password,
        email: user.email,
        created_at: new Date(),
      }
    })

    return response.data.user;
  }, {
    onSuccess: () => { 
      console.log('deu bom')
      queryClient.invalidateQueries('users')
    }
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUsersSchemaValidation),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (value) => {
    await createUser.mutateAsync(value);

    router.push("/users");

  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          bg="gray.800"
          borderRadius={8}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing={["6", "8"]}>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={formState.errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                {...register("password")}
                error={formState.errors.password}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação Senha"
                {...register("password_confirmation")}
                error={formState.errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
