import { TouchableOpacity } from 'react-native';
import { Heading, Icon, VStack, HStack, Text } from 'native-base';
import { Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg'


export function Exercise() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  
  function handleGoBack(){
    navigation.goBack();
  } 

  return(
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12} >
        <TouchableOpacity>
          <Icon as={Feather} 
            name='arrow-left' 
            color="green.500" size={6} 
            onPress={handleGoBack}/>  
        </TouchableOpacity>
      
        
        <HStack  bg="gray.600"  justifyContent="space-between" mt={4} pb={8} alignItems={'center'}>
          <Heading color="gray.100" size="lg" flexShrink={1} fontFamily={"heading"}>Unilateral Rowing</Heading>
          
          <HStack alignItems={'center'}>
            <BodySvg />

            <Text 
              color="gray.200" 
              ml={1} 
              textTransform="capitalize">lower back
            </Text>

          </HStack>

        </HStack>
      </VStack>
    </VStack>
  );
}

