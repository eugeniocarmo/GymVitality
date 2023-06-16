import { useState } from 'react';

import { Heading, VStack, SectionList, Text, Center } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';



export function History() {

  const [exercises, setExercises] = useState([

    {
      title: '16.06.23',
      data: ['Front Pull', 'Unilateral rowing' ],
    },
    {
      title: '17.06.23',
      data: ['Bent-over row',],
    },
    {
      title: '18.06.23',
      data: ['Deadlift'],
    }

  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Exercise History'/>


      <SectionList
              sections={exercises}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <HistoryCard/>   
              )}
              renderSectionHeader={({ section }) => (
                <Heading color='gray.200' fontSize="md" mt="10" mb="3">
                  {section.title}
                </Heading>
              )}
              px={8}
              contentContainerStyle = {exercises.length === 0 && {flex: 1, justifyContent: 'center'}}

              ListEmptyComponent={() => (
                  <Text 
                    color='white'
                    textAlign="center">
                      The list is empty. {'\n'}
                      Would you like start exercising today?
                  </Text>
              )}
              showsHorizontalScrollIndicator={false}
      />
              
    </VStack>
  );
}