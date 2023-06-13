import { HStack, VStack, Text, Heading } from "native-base";


export function HomeHeader(){
  return(
    <HStack>
    <VStack>
      <Text color={'gray.100'}>
        Hello,
      </Text>

      <Heading color={'gray.100'}>
        Eugenio
      </Heading>
    </VStack>
    </HStack>
  );
}