import React, {useState}  from 'react'
import {Image, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
  Card
} from "native-base";

function Login({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
});

const [isLoading, setIsLoading] = useState(false);

const handleOnChange = (name, value) => {
    setForm({
        ...form,
        [name]: value,
    });
};

const handleOnPress = async () => {
    try {
        const config = {
            headers: {
            'Content-type': 'application/json',
            },
        };
    
        const body = JSON.stringify(form);
        setIsLoading(true)
        const response = await axios.post('https://api.kontenbase.com/query/api/v1/efe01ff7-7a32-40d2-9af2-dccabe375a95/auth/login', body, config);
        console.log(response);
        setIsLoading(false)           
        if (response) {
            await AsyncStorage.setItem('token', response.data.token);
        }
        
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
            console.log(value);
            navigation.navigate("Main")
        }
            
    } catch (error) {
        console.log(error);
        alert(error.response.data.message);
        setIsLoading(false)           

    }
};

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

      <Image
  source={{ uri: 'https://res.cloudinary.com/danu-makmur-sejahtera-alabaong/image/upload/v1661421488/LoginIcon_k6wbde.png' }}
  style={{ width: "100%", height: "225px"}}
/>



      <VStack space={2} mt={5}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Login</Text>
        <FormControl mb={3}>
       
          <Input 
          placeholder='Email'
          backgroundColor="muted.200"
          onChangeText={(value) => handleOnChange('email', value)}
          borderColor="muted.400"/>
        </FormControl>
        <FormControl mb={5} height="40px">
          
          <Input 
          placeholder='Password'
          type="password" 
          backgroundColor="muted.200"
          onChangeText={(value) => handleOnChange('password', value)}
          borderColor="muted.400"/>

        </FormControl>
        <VStack space={2}>
          <Button backgroundColor="#FF5555" _text={{ fontWeight: "bold" , color: "white" }} mt={4} onPress={handleOnPress}>
            {isLoading ? <Text fontWeight= "bold" color= "white">Loading...</Text> : <Text fontWeight= "bold" color= "white">Login</Text>}
          </Button>
        </VStack>
        
        <HStack justifyContent="center">
          <Text fontSize="sm" color="muted.700" mt={5} fontWeight={500}>
            New users   ? {" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text color= "#FF5555" bold= "true"  fontSize= "sm" textDecoration= "none" ml={2} mt={5}>
            Register
            </Text>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Login