import { Header } from "@components/Header";
import Input from "@components/Input";
import { VStack, Text, View, HStack, ScrollView, Icon, Heading, Image } from "native-base";
import { Ionicons } from "@expo/vector-icons"
import { api } from "@services/api";
import axios from "axios";
import { useEffect, useState } from "react";

interface StoreTypesDataAPI {
  id: number;
  name: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export function Home() {
  const [storeTypes, setStoreTypes] = useState<StoreTypesDataAPI[] | undefined>([])

  useEffect(() => {
    async function fetchStoreTypesData() {
      const response = await handleGetStoreTypesData();

      setStoreTypes(response)
    }

    fetchStoreTypesData()
  }, []);

  async function handleGetStoreTypesData() {
    try {
      const { data } = await api.get<StoreTypesDataAPI[]>('/store/v1/types')
      console.log(data)
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`STATUS CODE: ${error.status} - DETAILS: ${error}`)
      }
    }
  }

  return (
    <>
    <Header />
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} overScrollMode='never'>
      <VStack flex={1}>
        <HStack mt={5} rounded="xl" bgColor="gray.200" justifyContent="center" alignItems="center" mb={4} px={5} mx={5}>
          <Icon as={Ionicons} name="search" color="red.700" fontWeight="bold"/>
          <Input placeholder="Buscar em Restaurantes" placeholderTextColor="gray.600" />
        </HStack>

        <View>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsHorizontalScrollIndicator={false} overScrollMode='never' horizontal>
            <HStack ml={5}>
              {storeTypes && storeTypes.map(st => (
                <View key={st.id} rounded="xl" h={105} w={105} mr={5} alignItems="center">
                  <Image src={st.avatar} alt={st.name} w="full" h="2/3"/>
                  <Text position="absolute" bottom={0} letterSpacing={0.5} fontWeight="semibold">{st.name}</Text>
                </View>
              ))}
            </HStack>
          </ScrollView>
        </View>

        <View my={10}>
          <HStack mb={5} justifyContent="space-between" alignItems="center" px={3}>
              <Heading fontSize="md">Ultimas Lojas</Heading>
              <Text color="red.500" fontSize="sm">Ver mais</Text>
          </HStack>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsHorizontalScrollIndicator={false} overScrollMode='never' horizontal>
            <HStack ml={3}>
              <View bgColor="red.500" rounded="full" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="full" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="full" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="full" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="full" h={85} w={85} mr={5}/>
            </HStack>
          </ScrollView>
        </View>

        <View my={10}>
          <HStack mb={5} justifyContent="space-between" alignItems="center" px={3}>
              <Heading fontSize="md">Vai de Churrasquinho?</Heading>
              <Text color="red.500" fontSize="sm">Ver mais</Text>
          </HStack>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsHorizontalScrollIndicator={false} overScrollMode='never' horizontal>
            <HStack ml={5}>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
            </HStack>
          </ScrollView>
        </View>

        <View my={10}>
          <HStack mb={5} justifyContent="space-between" alignItems="center" px={3}>
              <Heading fontSize="md">Ofertas Exclusivas</Heading>
              <Text color="red.500" fontSize="sm">Ver mais</Text>
          </HStack>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsHorizontalScrollIndicator={false} overScrollMode='never' horizontal>
            <HStack ml={5}>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
              <View bgColor="red.500" rounded="xl" h={85} w={85} mr={5}/>
            </HStack>
          </ScrollView>
        </View>

        <View>
          <Heading fontSize="md" mb={5} px={3}>Lojas</Heading>

          <View px={5}>
            <View my={3}>
              <HStack alignItems="center">
                <View bgColor="red.500" rounded="full" h={85} w={85} mr={5} />
                <View>
                  <Heading fontSize="md">Nome Loja</Heading>
                  <Text>Rate Loja | Categoria Loja | Distancia Loja</Text>
                  <Text>Tempo Médio | Frete Loja</Text>
                </View>
              </HStack>
            </View>

            <View my={3}>
              <HStack alignItems="center">
                <View bgColor="red.500" rounded="full" h={85} w={85} mr={5} />
                <View>
                  <Heading fontSize="md">Nome Loja</Heading>
                  <Text>Rate Loja | Categoria Loja | Distancia Loja</Text>
                  <Text>Tempo Médio | Frete Loja</Text>
                </View>
              </HStack>
            </View>

            <View my={3}>
              <HStack alignItems="center">
                <View bgColor="red.500" rounded="full" h={85} w={85} mr={5} />
                <View>
                  <Heading fontSize="md">Nome Loja</Heading>
                  <Text>Rate Loja | Categoria Loja | Distancia Loja</Text>
                  <Text>Tempo Médio | Frete Loja</Text>
                </View>
              </HStack>
            </View>

            <View my={3}>
              <HStack alignItems="center">
                <View bgColor="red.500" rounded="full" h={85} w={85} mr={5} />
                <View>
                  <Heading fontSize="md">Nome Loja</Heading>
                  <Text>Rate Loja | Categoria Loja | Distancia Loja</Text>
                  <Text>Tempo Médio | Frete Loja</Text>
                </View>
              </HStack>
            </View>

            <View my={3}>
              <HStack alignItems="center">
                <View bgColor="red.500" rounded="full" h={85} w={85} mr={5} />
                <View>
                  <Heading fontSize="md">Nome Loja</Heading>
                  <Text>Rate Loja | Categoria Loja | Distancia Loja</Text>
                  <Text>Tempo Médio | Frete Loja</Text>
                </View>
              </HStack>
            </View>

            <View my={3}>
              <HStack alignItems="center">
                <View bgColor="red.500" rounded="full" h={85} w={85} mr={5} />
                <View>
                  <Heading fontSize="md">Nome Loja</Heading>
                  <Text>Rate Loja | Categoria Loja | Distancia Loja</Text>
                  <Text>Tempo Médio | Frete Loja</Text>
                </View>
              </HStack>
            </View>
          </View>
        </View>
      </VStack>
    </ScrollView>
    </>
  )
}