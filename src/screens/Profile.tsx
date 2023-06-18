import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return(
    <VStack flex={1}>
      <ScreenHeader title="Profile"/> 
      <ScrollView>
      <Center mt={2} px={10}>
        {
          photoIsLoading ?
          <Skeleton 
          height={PHOTO_SIZE} 
          width={PHOTO_SIZE} 
          rounded="full"
          startColor="gray.500"
          endColor="gray.400"
          />
          :
          <UserPhoto 
            source={{uri: "http://github.com/eugeniocarmo.png"}}
            size={PHOTO_SIZE}
            alt="User photo"
          />
        }

        <TouchableOpacity>
          <Text color="green.500" fontWeight="bold" fontFamily="heading" mt={2} mb={8} fontSize="md">Change Photo</Text>
        </TouchableOpacity>

        <Input 
          bg="gray.600"
          placeholder="Your name"
        >
        </Input>
        <Input
          bg="gray.600"
          value="eugenio@email.com"
          isDisabled
        >
        </Input>
        
      </Center>
      </ScrollView>
    </VStack>
  );
}

