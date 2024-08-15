import { Text, ScrollView, View, VStack, Icon, HStack } from "native-base";
import { AntDesign } from '@expo/vector-icons'
import { useState } from "react";


export function Header () {
  const [sections, _] = useState([
    "Restaurantes",
    "Mercados",
    "Farmácias",
    "Bebidas",
    "Pet Shop",
  ])
  return (
    <VStack pl={2} pt={10} pb={3} borderBottomWidth={1} borderBottomColor="gray.100" mb={3}>
      <HStack pb={5} justifyContent="center" alignItems="center">
        <Text>Av. Exemplo de Rua Lorem Ipsum</Text>
        <Icon as={AntDesign} name="caretdown" color="red.700" ml={2} />
      </HStack>
      
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never">
        {
          sections.map(section => (
          <View rounded="xl" bgColor="gray.100" h={10} width={150} mr={5} alignItems="center" justifyContent="center">
            <Text>{section}</Text>
          </View>
          ))
        }
        </ScrollView>
      </View>
    </VStack>
  )
} 