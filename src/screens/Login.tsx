import Button from "@components/Button";
import Input from "@components/Input";
import { Text, View, VStack } from "native-base";

export function Login() {
  return (
    <VStack flex={1} px={5} py={10} justifyContent="space-between">
      <View>
        <Text fontSize={15} mb={5}>Qual o seu e-mail?</Text>
        <Input autoCapitalize="none" keyboardType="email-address"/>
      </View>
      <Button w="full" title='Continuar'/>
    </VStack>
  )
}