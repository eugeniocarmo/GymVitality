import { HStack, VStack, Text, Heading } from "native-base";

import { UserPhoto } from "./UserPhoto";


export function HomeHeader(){
  return(
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems={"center"}>
      <UserPhoto 
        source={{uri: "http://github.com/eugeniocarmo.png"}}
        size={16}
        alt="User photo"
        mr={4}
      />
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