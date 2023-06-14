import { useState } from 'react';
import { HStack, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

export function Home() {

  const [groupSelected, setGroupSelected] = useState('back');

  return(
    <VStack flex={1}>
      <HomeHeader />
        <HStack>
          <Group 
            name="back" 
            isActive={groupSelected === 'back'}
            onPress={() => setGroupSelected('back')}
          />
          <Group 
            name="biceps"
            isActive={groupSelected === 'biceps'}
            onPress={()=> setGroupSelected('biceps')}
          />
          <Group 
            name="triceps" 
            isActive={groupSelected === 'triceps'}
            onPress={()=> setGroupSelected('triceps')}
          />

          <Group 
            name="shoulders" 
            isActive={groupSelected === 'shoulders'}
            onPress={()=> setGroupSelected('shoulders')}
          />
        </HStack> 
    </VStack>
  );
} 
