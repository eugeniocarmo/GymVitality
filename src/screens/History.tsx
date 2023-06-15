import { Text, Center, VStack } from 'native-base';
import { ScreenHeader } from '@components/ScreenHeader';


export function History() {
  return (
    <VStack flex={1}>
      <ScreenHeader title='Exercise History'/>
      <Center>
        <Text color={'white'}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit sint suscipit eligendi perspiciatis quasi voluptatum assumenda tempora beatae non, explicabo, tenetur perferendis. Amet voluptate commodi perferendis quidem exercitationem nam magnam.</Text>
      </Center>
    </VStack>
  );
}

