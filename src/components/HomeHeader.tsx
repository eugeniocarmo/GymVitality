import { TouchableOpacity } from "react-native";
import { HStack, VStack, Text, Heading, Icon } from "native-base";
import { MaterialIcons} from "@expo/vector-icons"

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
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Hello,
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily={"heading"}>
          Eugenio
        </Heading>
      </VStack>
      <TouchableOpacity>
        <Icon 
          as = {MaterialIcons}
          name = "logout" 
          color="gray.200"
        />
      </TouchableOpacity>
      
    </HStack>
  );
}