import { Header } from "@components/Header";
import Input from "@components/Input";
import { VStack, Text, View, HStack, ScrollView, Icon, Heading, Image } from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons"
import { api } from "@services/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { SquaredStoreTypes } from "@components/SquaredStoreType";
import { formatCurrencyToRelatedCountry } from "@utils/Currency.utils";
import { IStoresDataAPI, IUserCustomProducts, StoreTypesDataAPI } from "src/interfaces/Home.interface";
import { handleGetResumedStoresData, handleGetSectionedProductsData, handleGetStoresData, handleGetStoreTypesData, handleUserCustomProductsData } from "@services/requests/home.requests";

export function Home() {
  const [storeTypes, setStoreTypes] = useState<StoreTypesDataAPI[] | undefined>([])
  const [resumedStores, setResumedStores] = useState<IStoresDataAPI[] | undefined>([])
  const [stores, setStores] = useState<IStoresDataAPI[] | undefined>([])
  const [sectionedProducts, setSectionedProducts] = useState<IUserCustomProducts[] | undefined>([])
  const [userCustomProduct, setUserCustomProduct] = useState<IUserCustomProducts[] | undefined>([])

  useEffect(() => {
    async function fetchStoreTypesData() {
      const response = await handleGetStoreTypesData();

      setStoreTypes(response)
    }

    fetchStoreTypesData()
  }, []);

  useEffect(() => {
    async function fetchResumedStoresData() {
      const response = await handleGetResumedStoresData()

      setResumedStores(response)
    }

    fetchResumedStoresData()
  }, [])

  useEffect(() => {
    async function fetchStoresData() {
      const response = await handleGetStoresData()

      setStores(response)
    }

    fetchStoresData()
  }, [])  

  useEffect(() => {
    async function fetchUserCustomProducstData() {
      const response = await handleUserCustomProductsData()

      setUserCustomProduct(response)
    }

    fetchUserCustomProducstData()
  }, [])

  useEffect(() => {
    async function fetchGetSectionedProducstData() {
      const response = await handleGetSectionedProductsData()

      setSectionedProducts(response)
    }

    fetchGetSectionedProducstData()
  }, [])  


  function renderProductsBySection() {
    return sectionedProducts.map(sectionedProduct => (
      <View rounded="xl" mr={5} w={120} alignItems="baseline" justifyContent="flex-end" key={sectionedProduct.productName}>
                  <Image src={sectionedProduct.productAvatar} rounded="full" h={85} w={85} resizeMode="center" alt={sectionedProduct.productName} flex={2}/>
                  <View>
                    <Text color="green.500" fontWeight="bold">{formatCurrencyToRelatedCountry(sectionedProduct.productPrice)}</Text>
                    <Text color="black" fontWeight={700}>{sectionedProduct.productName}</Text>
                  </View>
                  <View mt={2} flex={1}>
                    <Text color="black" fontSize={12}>{sectionedProduct.productStoreName}</Text>
                    <Text color="black" fontSize={12} mt={1}>
                        <Icon as={AntDesign} name="star" color="yellow.500" ml={10}/> 
                        {Math.abs(5).toFixed(1)}
                        <Text color="gray.400" ml={5}>(99999)</Text>
                    </Text>
                    <Text color="gray.400" fontSize={11}> 50 min | <Text color="green.500">Grátis</Text></Text>
                  </View>
                </View>
    ))
  }

  function renderStoreList () {
    return stores.map(store => (
      <View my={3} key={store.storeName}>
        <HStack alignItems="center">
          <View mr={5}>
            <Image src={store.storeAvatar} rounded="full" h={65} w={65} resizeMode="center" alt={store.storeName} flex={1}/>
          </View>
          <View>
            <Heading fontSize="md">{store.storeName}</Heading>
            <Text my={1}>
              <Icon as={AntDesign} name="star" color="yellow.500" ml={10}/> 
              {Math.abs(store.storeRate).toFixed(1)} | 
              {store.storeTypeName} | 
              2km
            </Text>
            <Text>25-35 min | <Text color="green.500">Grátis</Text></Text>
          </View>
        </HStack>
      </View>
    ))
  }

  function renderUserCustomizedProducts() {
    return userCustomProduct.map(customProduct => (
      <View rounded="xl" mr={5} w={120} alignItems="baseline" justifyContent="flex-end" key={customProduct.productName}>
                  <Image src={customProduct.productAvatar} rounded="full" h={85} w={85} resizeMode="center" alt={customProduct.productName} flex={2}/>
                  <View>
                    <Text color="green.500" fontWeight="bold">{formatCurrencyToRelatedCountry(customProduct.productPrice)}</Text>
                    <Text color="black" fontWeight={700}>{customProduct.productName}</Text>
                  </View>
                  <View mt={2} flex={1}>
                    <Text color="black" fontSize={12}>{customProduct.productStoreName}</Text>
                    <Text color="black" fontSize={12} mt={1}>
                        <Icon as={AntDesign} name="star" color="yellow.500" ml={10}/> 
                        {Math.abs(5).toFixed(1)}
                        <Text color="gray.400" ml={5}>(99999)</Text>
                    </Text>
                    <Text color="gray.400" fontSize={11}> 50 min | <Text color="green.500">Grátis</Text></Text>
                  </View>
                </View>
    ))
  }

  function renderResumedStores() {
    return resumedStores.map(store => (
      <View alignItems="center" mr={5}>
        <Image src={store.storeAvatar} rounded="full" h={85} w={85} resizeMode="center" alt={store.storeName} flex={1}/>
        <Text>{store.storeName}</Text>
      </View>
    ))
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
                <SquaredStoreTypes key={st.id} avatar={st.avatar} name={st.name}/>
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
              {resumedStores && renderResumedStores()}
            </HStack>
          </ScrollView>
        </View>

        <View my={10}>
          <HStack mb={5} justifyContent="space-between" alignItems="center" px={3}>
              <Heading fontSize="md">Vai um pra viagem? 🚙</Heading>
              <Text color="red.500" fontSize="sm" fontWeight="bold">Ver mais</Text>
          </HStack>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsHorizontalScrollIndicator={false} overScrollMode='never' horizontal>
            <HStack ml={5}>
            {
              sectionedProducts && renderProductsBySection()
            }
            </HStack>
          </ScrollView>
        </View>

        <View my={10}>
          <HStack mb={5} justifyContent="space-between" alignItems="center" px={3}>
              <Heading fontSize="md">Ofertas Exclusivas</Heading>
              <Text color="red.500" fontSize="sm" fontWeight="bold">Ver mais</Text>
          </HStack>
          <ScrollView contentContainerStyle={{flexGrow: 1}} showsHorizontalScrollIndicator={false} overScrollMode='never' horizontal>
            <HStack ml={5}>
            {
              userCustomProduct && renderUserCustomizedProducts()
            }
            </HStack>
          </ScrollView>
        </View>

        <View>
          <Heading fontSize="md" mb={5} px={3}>Lojas</Heading>

          <View px={5}>
            {stores && renderStoreList()}
          </View>
        </View>
      </VStack>
    </ScrollView>
    </>
  )
}