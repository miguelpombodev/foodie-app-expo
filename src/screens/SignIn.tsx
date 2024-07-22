import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, View } from 'native-base';

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input';
import Button from '@components/Button';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

export default function SignIn () {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()


  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} overScrollMode='never'>
    <VStack flex={1} bg="gray.800" pb={16}>
      <Image source={BackgroundImg} alt='Pessoas treinando' resizeMode='stretch' position='absolute' flex={1} defaultSource={BackgroundImg}/>
      <View px={10}>
        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
          <Input placeholder='E-mail' keyboardType='email-address' autoCapitalize='none'/>
          <Input placeholder='Senha' secureTextEntry />

          <Button title='Acessar'/>
        </Center>

        <Center mt={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">Ainda não tem acesso?</Text>  
          <Button title='Cria conta' variant="outline" onPress={handleNewAccount}/>
        </Center>
      </View>
    </VStack>
    </ScrollView>
  )
}