import { Pressable, IPressableProps, Text } from "native-base";

type Props = IPressableProps & { 
  name: string;
}

export function Group({name, ...rest}:Props) {
  return (

    <Pressable
      mr={3}
      w={24}
      h={10}
      mt={10}
      mb={10}

      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"

      _pressed={{
        borderColor: "green.500",
        borderWidth: 1
      }}
      {...rest}
    >
      <Text 
        color="gray.200"
        textTransform="uppercase"
        fontSize="xs"
      >
        {name}
      </Text>
    </Pressable>
    
  );
}