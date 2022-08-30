import React, {useState, useEffect} from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ListItem, Avatar } from "react-native-elements"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { FlatList } from "react-native-gesture-handler";

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

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      marginBottom: "10px",
      marginTop: "10px"
    }})

const bgCustome = StyleSheet.create({
    bgBlue: {
        backgroundColor: "#81C8FF",
        borderRadius: 8,
        padding: 2
    },
    bgPink: {
        backgroundColor: "#FF8181",
        borderRadius: 8,
        padding: 2
    },
    bgYellow: {
        backgroundColor: "#FFB681",
        borderRadius: 10,
        padding: 2
    }
  });

  const containerBox = StyleSheet.create({
    bgBlue: {
      backgroundColor: "#81C8FF",
      borderRadius: 4,
      padding: 10},
    bgPink: {
        backgroundColor: "#FF8181",
        borderRadius: 4,
        padding: 10},
    bgYellow: {
          backgroundColor: "#FFB681",
          borderRadius: 4,
          padding: 10} 
        })


function ListsToDo() {

  const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    
    const getData = async() => {

        try {
            const token = await AsyncStorage.getItem('token');
            if (token === null) {
                navigation.navigate("Login")
            }
    
            const config = {
                headers: {
                  'Content-type': 'application/json',
                  Authorization: 'Bearer ' + token 
                },
            };
    
            setIsLoading(true);
    
            const res = await axios.get("https://api.kontenbase.com/query/api/v1/efe01ff7-7a32-40d2-9af2-dccabe375a95/Users", config)
            // console.log(res.data);
            setData(res.data)
            setIsLoading(false);
        
        } catch (error) {
            console.log(error);    
        }
    }
    
    useEffect(() => {
        getData()
    },[])

    // const handleLogout = async() => {
    //     await AsyncStorage.removeItem('token');
    //     navigation.navigate("Login")
    // }

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
        <Box mb={5} >
            <HStack justifyContent="space-between">
            <VStack>
            <Text fontSize="xl" fontWeight="bold">Hi Momoa</Text>
            <Text fontSize="sm" color="#FF5555">200 List</Text>
            </VStack>
            <Image
             source={{uri: 'https://res.cloudinary.com/danu-makmur-sejahtera-alabaong/image/upload/v1661501097/JasonMomoa_wrkohj.jpg' }}
             style={{width: "50px", height: "50px", borderRadius:"100px"}}/>
            </HStack>
          </Box>


          <FormControl mb={1}>
            <Input 
            placeholder='Search List....'
            type="text" 
            backgroundColor="muted.200"
            borderColor="muted.400"/>
            </FormControl>

          <HStack>
          <FormControl mr ={1} mb={1} width="100px" height="40px">  
            <Input
             InputLeftElement={<Icon as={<Ionicons name="calendar-outline" />} size="sm" m={1} color="muted.400"/>}
            placeholder='Choose Date'
            type='date'
            backgroundColor="muted.200"
            borderColor="muted.400">

                </Input>
            </FormControl>
            <FormControl mr ={1} mb={1} width="100px" height="40px">  
            <Select 
            placeholder='Status'
            backgroundColor="muted.200"
            borderColor="muted.400">
             <Select.Item label="Study" value="" />
             <Select.Item label="Workout" value="" />
             <Select.Item label="Homework" value="" />
                </Select>
            </FormControl>
            <FormControl mr ={1} mb={1} width="100px" height="40px">  
            <Select 
            placeholder='Category'
            backgroundColor="muted.200"
            borderColor="muted.400">
             <Select.Item label="Study" value="" />
             <Select.Item label="Workout" value="" />
             <Select.Item label="Homework" value="" />
                </Select>
            </FormControl>
          </HStack>
        
          <Box mb={5} style={containerBox.bgBlue} maxW="100%">
            <HStack justifyContent="space-between">
            <ListItem.Content>
                <ListItem.Title h4 numberOfLines={1} > 
                    <Text fontSize="xl" fontWeight="bold" onPress={() => navigation.navigate("DetailList")} >Study - Golang</Text>
                </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={2}>
                            <Text fontSize="xs" fontWeight="xs">Learn Golang to improve Fundamentals and familizier with coding</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle ><View><Ionicons name="calendar-outline" /></View>
                            <Text fontSize="xs" fontWeight="xs"> 22 Agustus 2022 </Text>
                    </ListItem.Subtitle>
          </ListItem.Content >
          <VStack alignItems="center">
          <View 
            style={styles.button}>
             <TouchableOpacity style={bgCustome.bgPink}>
                <Text marginLeft={2} marginRight={2} color="white">Study</Text>
             </TouchableOpacity>
          </View>
          <View>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

            </VStack>
            </HStack>
          </Box>

          <Box mb={5} style={containerBox.bgPink} maxW="100%">
            <HStack justifyContent="space-between">
            <ListItem.Content>
                <ListItem.Title h4 numberOfLines={1} > 
                    <Text fontSize="xl" fontWeight="bold">Study - Golang</Text>
                </ListItem.Title>
                    <ListItem.Subtitle numberOfLines={2}>
                            <Text fontSize="xs" fontWeight="xs">Learn Golang to improve Fundamentals and familizier with coding</Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle ><View><Ionicons name="calendar-outline" /></View>
                            <Text fontSize="xs" fontWeight="xs"> 22 Agustus 2022 </Text>
                    </ListItem.Subtitle>
          </ListItem.Content >
          <VStack alignItems="center">
          <View 
            style={styles.button}>
             <TouchableOpacity style={bgCustome.bgBlue}>
                <Text marginLeft={2} marginRight={2} color="white">Study</Text>
             </TouchableOpacity>
          </View>
          <View>
            <Ionicons name="md-checkmark-circle" size={32} color="grey" />
          </View>

            </VStack>
            </HStack>
          </Box>

        </VStack>
      </Box>
    )

   
  }

  export default ListsToDo