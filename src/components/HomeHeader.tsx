import { HStack, VStack, Text, Heading, Center } from "native-base";


export function HomeHeader(){
  return(
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={"center"}>
      <VStack>
        <Text color="gray.100" fontSize="md">
          Hello,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Eugenio
        </Heading>
      </VStack>
    </HStack>
  );
}