import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from 'native-base';
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

const PHOTO_SIZE = 33;

export function Profile() {
  
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  const [userPhoto, setUserPhoto] = useState('https://github.com/eugeniocarmo.png');

  
  async function handleUserPhotoSelect(){
    setPhotoIsLoading(true)

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect:[4, 4], 
        allowsEditing: true
      });

      if (photoSelected.cancelled) {
        return;
      }
  
       if (photoSelected.uri) {
        const photoInfo = await FileSystem.getInfoAsync(photoSelected.uri);
        console.log(photoInfo)

        
        setUserPhoto(photoSelected.uri);
      }
 
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return(
    <VStack flex={1}>
      <ScreenHeader title="Profile"/> 

      <ScrollView contentContainerStyle = {{paddingBottom: 36}}>
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
            source={{uri: userPhoto}}
            size={PHOTO_SIZE}
            alt="User photo"
          />
        }

        <TouchableOpacity onPress={handleUserPhotoSelect}>
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
        
    

        <Heading color="gray.200" fontSize="md" mb={2} alignSelf={"flex-start"} mt={12}>
          Change password
        </Heading>

        <Input 
          bg="gray.600"
          placeholder="Current password"
          secureTextEntry
        >
        </Input>
        <Input 
          bg="gray.600"
          placeholder="New password"
          secureTextEntry
        >
        </Input>
        <Input 
          bg="gray.600"
          placeholder="Confirm new password"
          secureTextEntry
        >
        </Input>
        <Button
          title='Change Password'
          mt={4}
          
        />

      </Center>

      </ScrollView>
    </VStack>
  );
}