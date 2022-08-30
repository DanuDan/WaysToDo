import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { ListItem, Avatar } from "react-native-elements"

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
  TextArea,
  List
} from "native-base";

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      marginBottom: "10px",
      marginTop: "10px"
    }

  })
  
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
        borderRadius: 8,
        padding: 2
    }
  });


function DetailList({navigation}) {
    return (
      <Box
        safeArea
        bg=""
        flex={5}
        p={10}
        w="100%"
        mx="auto"
        itemContent="center"
      >

        <VStack space={2} mt={5}>

          <Box mb={5} style={containerBox.bgBlue}>
            
              <VStack>
                <HStack alignItems="center" justifyContent="space-between">
                <ListItem.Title h4> 
                    <Text fontSize="xl" fontWeight="bold">Study - Golang</Text>
                </ListItem.Title>
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

            <ListItem.Content>
                    <ListItem.Subtitle>
                      <Text fontSize="xs" fontWeight="xs">
                        <VStack mb={5}>
                      <Text mb={2} mt={5}>Learn Golang to improve fundamentals and familiarize with coding. </Text>
                           <Text>Advantages of Go</Text>
                           <Text mb={2}>Go has advantages over other languages, including: </Text>
                              <Text mb={3}>
                                <VStack>
                              <>
                              Supports concurrency at the language level with fairly easy application</>
                              <>
                              Supports data processing with multiple processors at the same time (parallel processing)</>
                              <>
                              Have a garbage collector</>
                              <>
                              The compilation process is very fast
                              It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code.</>
                               </VStack>
                              </Text>
                              <Text mb={4}>
                              Listing Material :</Text>
                              <VStack>
                              <>1.  Installation</>
                              <>2.  Setup Go Modules</>
                              <>3.  Setup Gopath & Workspace</>
                              <>4.  Go Command</>
                              <>5.  Hello World</>
                              <>6.  Variable</>
                              <>7.  Tipe DataKonstanta</>
                              <>8.  Operator</>
                              <>9.  Condition</>
                              <>10.  Loops</>
                              </VStack>
                         </VStack>
                      </Text>
                    </ListItem.Subtitle>
                    <ListItem.Subtitle ><View><Ionicons name="calendar-outline" /></View>
                            <Text fontSize="xs" fontWeight="xs"> 22 Agustus 2022 </Text>   
                  </ListItem.Subtitle>

          </ListItem.Content >
          {/* <VStack alignItems="center">
          <View 
            style={styles.button}>
             <TouchableOpacity style={bgCustome.bgPink}>
                <Text marginLeft={2} marginRight={2} color="white">Study</Text>
             </TouchableOpacity>
          </View>
          <View>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

            </VStack> */}
            </VStack>
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

  export default DetailList