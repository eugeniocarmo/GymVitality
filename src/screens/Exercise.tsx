import { TouchableOpacity } from 'react-native';
import { Heading, Icon, VStack, HStack, Text, Image, Box } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg'
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

import { Button } from '@components/Button';


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
          <Heading color="gray.100" size="lg" flexShrink={1}>Unilateral Rowing</Heading>
          
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
    
      <VStack p={8}>
        <Image 
          w="full"
          h={80}
          alt="Image of the exercise"
          source={{ uri: 'https://www.muscleandfitness.com/wp-content/uploads/2018/05/1109-one-arm-dumbbell-row-back.jpg'}}
          mb={3}
          resizeMode="cover"
          rounded="lg"
          overflow="hidden"
        />

        <Box bg="gray.600" rounded="md" pb={4} px={4}>
          <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}> 
            <HStack>
              <SeriesSvg />
              <Text color="gray.200" ml="2">
                3 Series
              </Text>
            </HStack>
          
            <HStack >
              <RepetitionsSvg />
              <Text color="gray.200" ml="2">
                12 repetitions
              </Text>
            </HStack>
          </HStack>
          <Button title='Mark as done'/>
        </Box>
      </VStack>
    </VStack>
  );
}

