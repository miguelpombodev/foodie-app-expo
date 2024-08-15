import { Text, useToast, View, VStack } from "native-base";
import { Controller, useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from "@components/Button";
import Input from "@components/Input";
import { useAuth } from "@hooks/useAuth";
import { useState } from "react";
import { AppError } from "@utils/AppError";

type FormDataProps = {
  email: string
}

const loginSchema = yup.object({
  email: yup.string().required("Informe o seu email já cadastrado").email("E-mail inválido")
})

export function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth()
  const { control, handleSubmit } = useForm<FormDataProps>({
  resolver: yupResolver(loginSchema)
})

  const toast = useToast()

  async function handleLoginByEmail({email}: FormDataProps) {
    try {
      setIsLoading(true)
      await signIn(email)
      
    } catch (error) {
      const isAppError = error instanceof AppError;
 
      const title =  isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.'
    
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500'
      })
      
      setIsLoading(false)
    }
  }

  return (
    <VStack flex={1} px={5} py={10} justifyContent="space-between">
      <View>
        <Text fontSize={15} mb={5}>Qual o seu e-mail?</Text>
        <Controller control={control} name="email" render={({field: {onChange}}) => (
          <Input 
            autoCapitalize="none" 
            keyboardType="email-address" 
            onChangeText={onChange} 
            returnKeyType="send"/>
        )}/>
      </View>
      <Button w="full" title='Continuar' onPress={handleSubmit(handleLoginByEmail)} isLoading={isLoading}/>
    </VStack>
  )
}