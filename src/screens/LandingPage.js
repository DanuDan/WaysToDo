import React from 'react'
import {Image} from 'react-native'
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

function LandingPage({navigation}) {
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
        <VStack space={2} alignItems='center'>
      <Image
  source={{ uri: 'https://res.cloudinary.com/danu-makmur-sejahtera-alabaong/image/upload/v1661481643/OpeningIcon_hbm2ls.png' }}
  style={{ width: "300px", height: "300px"}}
/>
<Image
  source={{ uri: 'https://res.cloudinary.com/danu-makmur-sejahtera-alabaong/image/upload/v1661481619/WaysToDO_nezo92.png' }}
  style={{ width: "265px", height: "48px"}}
/>      </VStack>

        <VStack alignItems="center">
          <Text fontSize="sm" color="muted.700" mt={5} fontWeight={500}>
            Write your activity and finish your activity.{" "}
          </Text>
          <Text fontSize="sm" color="muted.700" fontWeight={500}>
          Fast, Simple and Easy to Use{" "}
          </Text>
        </VStack>


      <VStack space={2} mt={5}>
        <VStack space={2}>
            
          <Button _focus={{backgroundColor: "muted.300"}} backgroundColor="#FF5555"  _text={{ fontWeight: "bold" , color: "white" }} mt={4} 
          onPress={() => navigation.navigate("Login")} >
            Login
          </Button>
        </VStack>
        
        <VStack space={2}>
          <Button _focus={{backgroundColor: "muted.300"}} backgroundColor="#FF5555" _text={{ fontWeight: "bold" , color: "white" }} mt={1}
          onPress={() => navigation.navigate("Register")} >
            Register
          </Button>
        </VStack>
      </VStack>

    </Box>
  )
}

export default LandingPage