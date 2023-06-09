import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {

  const [groupSelected, setGroupSelected] = useState('lower back');
  const [groups, setGroups] = useState(['lower back', 'biceps', 'triceps', 'shoulders', 'upper body']);

  const [exercises, setExercises] = useState(['unilateral rowing', 'front pull', 'bent-over row', 'deadlift', '5','6']);


  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails(){
    navigation.navigate('exercise');
  }

  return(
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Group 
            name={item} 
            isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
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
          <Heading color="gray.200" fontSize="md" fontFamily={"heading"}>
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
            <ExerciseCard 
              onPress={handleOpenExerciseDetails}
            />
            )}
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ paddingBottom: 20 }}
          />
          

      </VStack>    
    </VStack>
  );
} 
