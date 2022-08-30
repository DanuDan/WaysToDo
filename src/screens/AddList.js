import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import MaterialIcons from '@expo/vector-icons/Ionicons';
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'



import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Card,
  Select,
  TextArea
} from "native-base";

function AddList({navigation}) {

  //FIND
  const [data, setData] = useState([])
  const getData = async() =>{
    try {
        const token = await AsyncStorage.getItem('token');
        if (token === null) {
            navigation.navigate("Login")
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
        };

        const res = await axios.get('https://api.kontenbase.com/query/api/v1/efe01ff7-7a32-40d2-9af2-dccabe375a95/Category', config);
        setData(res.data)


    } catch (error) {
        console.log(error);

    }
}

useEffect(()=> {
    getData()
},[data])

    return (
      <Box
        safeArea
        bg=""
        flex={5}
        p={10}
        w="100%"
        mx="auto"
        justifyContent="center"
        itemContent="center"
      >

        <VStack space={2} mt={5}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>Add List</Text>
          <FormControl mb={1}>
            <Input 
            placeholder='Name'
            type="text" 
            backgroundColor="muted.200"
            borderColor="muted.400"/>
            </FormControl>
          
          <FormControl mb={1} height="40px">
          <Select
            placeholder='Category'
            backgroundColor="muted.200"
            borderColor="muted.400"
                                numColumns={3}
                                data={data}
                                key={item => item.index}
                                renderItem={({item}) => (
            <View>
              <Select>
             <SelectList  label={item.name} value=""/>
             </Select>
             </View>

                                )}
                                onRefresh={getData}
                            />  

            </FormControl>

            <FormControl mb={1}>
            <Input
            title = 'DatePicker'
            placeholder='Date'
            backgroundColor="muted.200"
            borderColor="muted.400"
            onPress={()=> showMode('date')}
            InputRightElement={<Icon as={<MaterialIcons name="calendar-outline" />} size="md" m={2} color="muted.400"/>}/>
          </FormControl>
    
          <FormControl height="40px">  
          <TextArea h={20}
          placeholder="Description" 
          backgroundColor="muted.200"
          borderColor="muted.400"
          maxW="100%" />
          
          </FormControl>

          <VStack space={2} mt='52px'>
          <Button backgroundColor="#FF5555" _text={{ fontWeight: "bold" , color: "white" }} mt={4} >
            Add List
          </Button>
        </VStack>
        </VStack>
      </Box>
    )
  }

  export default AddList