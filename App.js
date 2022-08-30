import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Container from "./Container"



export default function App() {
  return (
    <NativeBaseProvider>
    <Container/>
    </NativeBaseProvider>
  );
}

