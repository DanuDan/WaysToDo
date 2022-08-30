import React, {useState, useEffect} from 'react'
import { TouchableOpacity, StyleSheet, View} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import MaterialIcons from '@expo/vector-icons/Ionicons';
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

function AddCategory() {
  //STYLE
    const styles = StyleSheet.create({
        button: {
          alignItems: "center",
          marginRight: 10,
        }})

    const bgCustome = StyleSheet.create({
        bgBlue: {
            backgroundColor: "#81C8FF",
            borderRadius: 10,
            padding: 4
        },
        bgPink: {
            backgroundColor: "#FF8181",
            borderRadius: 10,
            padding: 4
        },
        bgYellow: {
            backgroundColor: "#FFB681",
            borderRadius: 10,
            padding: 4
        }
      });

//POST
      const [form, setForm] = useState({
        name: '',
    });
      
      const handleOnChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };
    
    const handleOnPress = async () => {
        try {
    
          const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate("ListsToDo")
            }

            const config = {
                headers: {
                  'Content-type': 'application/json',
                  Authorization: 'Bearer ' + token 
                },
            };

            const body = JSON.stringify(form);

            const response = await axios.post('https://api.kontenbase.com/query/api/v1/efe01ff7-7a32-40d2-9af2-dccabe375a95/Category', body, config);
            console.log(response);

                
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);        
    
        }
    };

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
          <Text fontSize="xl" fontWeight="bold" mb={2}>Add Category</Text>
          <FormControl mb={1}>
            <Input 
            placeholder='Name'
            type="text" 
            onChangeText={(value) => handleOnChange('name', value)}
            backgroundColor="muted.200"
            borderColor="muted.400"/>
            </FormControl>

            <VStack space={2}>
                <Button backgroundColor="#FF5555" _text={{ fontWeight: "bold" , color: "white" }} mt={1} onPress={handleOnPress} >
                    Add Category
                </Button>
            </VStack>

         <Text fontSize="xl" fontWeight="bold" mt='100px' mb={2}>List Category</Text>
          <HStack>

          <FlatList
                                numColumns={3}
                                data={data}
                                key={item => item.index}
                                renderItem={({item}) => (
                                  <View 
                                  style={styles.button}>
                                   <TouchableOpacity style={bgCustome.bgBlue}>
                                      <Text marginLeft={2} marginRight={2} color="white">{item.name}</Text>
                                   </TouchableOpacity>
                                  </View>
                                )}
                                onRefresh={getData}
                            />

          </HStack>
        </VStack>
      </Box>
    )

   
  }

  export default AddCategory