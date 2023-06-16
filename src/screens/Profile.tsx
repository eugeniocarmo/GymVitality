import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, ScrollView, VStack } from 'native-base';

export function Profile() {

  return(
    <VStack flex={1}>
      <ScreenHeader title="Profile"/>
      <ScrollView>
      <Center mt={2} px={10}>
        <UserPhoto 
          source={{uri: "http://github.com/eugeniocarmo.png"}}
          size={33}
          alt="User photo"
        />
      </Center>
      </ScrollView>
    </VStack>
  );
}

