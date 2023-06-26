import {TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, VStack, Heading, Image, Text, Icon } from "native-base";
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {

};

export function ExerciseCard({...rest}: Props){

  return(

    <TouchableOpacity {...rest}>
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image 
          source={{ uri: 'https://www.muscleandfitness.com/wp-content/uploads/2018/05/1109-one-arm-dumbbell-row-back.jpg'}}
          alt='Exercise image'
          w={16}
          h={16}
          rounded='md'
          mr={4} 
          resizeMode="cover"
          
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily={"heading"}>
            Unilateral Rowing
          </Heading>
          
          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 series x 2 repetitions
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />

      </HStack>
    </TouchableOpacity>

  );
}   

