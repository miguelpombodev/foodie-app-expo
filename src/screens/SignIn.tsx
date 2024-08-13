import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native'
import { VStack, Text, Center, ScrollView, View, HStack } from 'native-base';

import LogoSvg from '@assets/logo.svg'
import Button from '@components/Button';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export default function SignIn () {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()


  function handleLoginScreen() {
    navigation.navigate('login')
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} overScrollMode='never'>
    <VStack flex={1} bg="white" pb={16} justifyContent="flex-end">
      <View px={10}>
        <Center mb={20}>
          <LogoSvg width={200} height={200}/>
        </Center>
        <Center>
          <Text color="gray.500" fontSize="sm" mb={6} fontFamily="heading">
            Entre ou crie uma conta para continuar
          </Text>
          {
            Platform.OS == 'android' ? <Button w="full" variant="outline" title='Continuar com a conta Google' fillColor='white'/> : <Button w="full" title='Continuar com a Apple' fillColor='black'/>
          }
          <HStack mt={5} color="gray.500" justifyContent="space-between" alignItems="center">
            <Text 
              w="40"  
              textAlign="center" 
              borderBottomWidth={1}
              borderBottomColor="gray.400"
              mx={2}
              mb={4}
            />
            <Text
            color="gray.400"
            >ou</Text>
            <Text 
              w="40"  
              textAlign="center" 
              borderBottomWidth={1}
              borderBottomColor="gray.400"
              mx={2}
              mb={4}
            />
          </HStack>
          <Button w="full" title='Facebook' mt={5} fillColor='blue.600'/>
        </Center>

        <HStack justifyContent="space-between" w="full" mt={5}>
          <Button w="2/5" title='Celular' variant="outline" onPress={handleLoginScreen}/>
          <Button w="2/5" title='E-mail' variant="outline" onPress={handleLoginScreen}/>
        </HStack>
      </View>
    </VStack>
    </ScrollView>
  )
}