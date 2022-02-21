import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Forms/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInSchemaValidation = yup.object({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchemaValidation),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (value) => {
    console.log(value);
  };

  return (
    <Flex width="100vw" height="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        p="8"
        bgColor="gray.700"
        flexDirection="column"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="E-mail"
            type="email"
            {...register("email")}
            error={formState.errors.email}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register("password")}
            error={formState.errors.password}
          />
        </Stack>
        <Button
          type="submit"
          marginTop={6}
          bg="pink.500"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
