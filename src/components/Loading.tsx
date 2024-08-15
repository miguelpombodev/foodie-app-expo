import { Spinner, Center } from "native-base";

export default function Loading () {
  return (
    <Center flex={1} bg="white">
      <Spinner color="red.500"/>
    </Center>
  )
}