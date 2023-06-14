import { Text } from "native-base";

type Props = {
  name: string;
}

export function Group({name}:Props) {
  return (

    <Text 
      color="gray.200"
      textTransform="uppercase"
      fontSize="xs"
    >
      {name}
    </Text>
  );
}