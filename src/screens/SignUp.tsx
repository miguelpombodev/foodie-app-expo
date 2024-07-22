import { VStack, Image, Text, Center, Heading, ScrollView, View } from 'native-base';

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import Input from '@components/Input';
import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export default function SignUp () {
  const navigation = useNavigation()
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