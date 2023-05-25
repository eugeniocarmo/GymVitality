import { Center, Spinner } from 'native-base'

export function Loading() {
  return(
    <Center flex={1} bg="blueGray.800">
      <Spinner />
    </Center>
  )
}
