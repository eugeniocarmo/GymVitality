import { HStack, Heading, Text, VStack } from "native-base";


export function HistoryCard(){
  return(
    <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md" alignItems="center" justifyContent="space-between">
      <VStack mr={5}>
        <Heading color="white" fontSize="md" textTransform="capitalize">Lower Back</Heading>
        <Text color="gray.100" fontSize="lg" textTransform="capitalize" numberOfLines={1}>front pull</Text>
      </VStack>
      
      <Text color="gray.300" fontSize="md">8:56</Text>
    </HStack>
  );
}