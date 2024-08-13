import { View, Image, Text } from 'native-base';

interface IStoreTypes {
  name: string;
  avatar: string;
}


export function SquaredStoreTypes ({ name, avatar}: IStoreTypes) {
  return (
    <View rounded="xl" h={105} w={105} mr={5} alignItems="center">
      <Image src={avatar} alt={name} w="full" h="2/3"/>
      <Text position="absolute" bottom={0} letterSpacing={0.5} fontWeight="semibold">{name}</Text>
    </View>
  )
}