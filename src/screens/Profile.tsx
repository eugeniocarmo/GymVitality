import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, ScrollView, VStack, Skeleton } from 'native-base';
import { useState } from 'react';

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
      </Center>
      </ScrollView>
    </VStack>
  );
}

