import { Input as NativeBaseInput, IInputProps } from "native-base";

export function Input({...rest}: IInputProps) {

  return(
    <NativeBaseInput 
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      mb={4}
      mx={2}
      placeholderTextColor={'gray.300'}
      {...rest}
    />
   
  );
}