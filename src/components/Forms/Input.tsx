import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";


interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, type, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name} id={name}>
        {label}
      </FormLabel>
      <ChakraInput
        id={name}
        name={name}
        type={type}
        focusBorderColor="pink.500"
        bg="gray.900"
        size="lg"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        {...rest}
        ref={ref}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
