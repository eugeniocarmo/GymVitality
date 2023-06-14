import { useState } from 'react';
import { FlatList, VStack } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';

export function Home() {

  const [groupSelected, setGroupSelected] = useState('back');
  const [groups, setGroups] = useState(['lower back', 'biceps', 'triceps', 'shoulders', 'upper body']);

  return(
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group 
            name={item} 
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={
          { px: 8}
        }
        my={10}
        maxH={10}
       
      /> 
    </VStack>
  );
} 
