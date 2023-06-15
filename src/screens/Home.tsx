import { useState } from 'react';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {

  const [groupSelected, setGroupSelected] = useState('back');
  const [groups, setGroups] = useState(['lower back', 'biceps', 'triceps', 'shoulders', 'upper body']);

  const [exercises, setExercises] = useState(['unilateral rowing', 'front pull', 'bent-over row', 'deadlift', '5','6']);

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
        minH={10}
       
      /> 

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercise
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

          

          <FlatList
            data={exercises}
            keyExtractor={item => item}
            renderItem={({item}) => (
            <ExerciseCard />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ paddingBottom: 20 }}
          />
          

      </VStack>    
    </VStack>
  );
} 
