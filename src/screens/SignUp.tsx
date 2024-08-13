import { VStack, Image, Text, Center, Heading, ScrollView, View } from 'native-base';
import Input from '@components/Input';
import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export default function SignUp () {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} overScrollMode='never'>
    <VStack flex={1} bg="red.500" pb={16}>
      <View px={10}>
        <Center>
          <Heading color="white" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input placeholder='E-mail' keyboardType='email-address' autoCapitalize='none'/>
          <Input placeholder='Nome'/>
          <Input placeholder='Senha' secureTextEntry />

          <Button title='Criar e Acessar'/>
        </Center>

        <Button mt={24} title='Voltar para o login' variant="outline" onPress={navigation.goBack}/>
      </View>
    </VStack>
    </ScrollView>
  )
}