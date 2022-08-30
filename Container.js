import React from 'react'
import {View} from 'react-native'
import { useTheme } from 'native-base'
import LandingPage from './src/screens/LandingPage'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import AddList from './src/screens/AddList'
import AddCategory from './src/screens/AddCategory'
import ListsToDo from './src/screens/ListsToDo'
import DetailList from './src/screens/DetailList'
import { MaterialCommunityIcons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'

let Stack = createStackNavigator()
const Tab = createBottomTabNavigator();



function MyTab(){

  const theme = useTheme()

  return(
    <Tab.Navigator
      screenOptions={({route})=> ({
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle:{backgroundColor: "#FF5555"},

        tabBarIcon: ({focused}) => {
          let iconName;
          
          if(route.name === "Add Category"){
            iconName = focused ? "clipboard-list" : "clipboard-outline" 
          } else if (route.name === "Lists To Do") {
            iconName = focused ? "view-list" : "view-list-outline";
          } else if(route.name === "Add List"){
            iconName = focused ? "shape" : "shape-outline" 
          } 

          return <MaterialCommunityIcons name={iconName} size={20} color="#FF5555" />
        },
        tabBarActiveTintColor: theme.colors.primary['800'],
        tabBarInactiveTintColor: "grey"

      })}
    >


      <Tab.Screen name="Add Category" component={AddCategory}
        options= {{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: {backgroundColor: "#FF5555"}
        }} 
      />     
        <Tab.Screen name="Lists To Do" component={ListsToDo}
     options= {{
      headerMode:"screen",
      headerTintColor: "white",
      headerStyle: {backgroundColor: "#FF5555"}
    }} 
      />

<Tab.Screen name="Add List" component={AddList}
     options= {{
      headerMode: "screen",
      headerTintColor: "white",
      headerStyle: {backgroundColor: "#FF5555"}
    }} 
      />
    </Tab.Navigator>
    
    
  )
}


function Container() {
  return (
    <NavigationContainer >
      
      <Stack.Navigator initialRouteName='LandingPage'>
      <Stack.Screen
        name="Main"
        component={MyTab}
        options={{
          headerShown: false,
        }}
        
      />      
        <Stack.Screen  name="LandingPage" component={LandingPage} options={{headerMode:"screen",
      headerTintColor: "white",
      headerStyle: {backgroundColor: "#FF5555"}}}  />
        <Stack.Screen name="Login" component={Login} options={{headerMode:"screen",
      headerTintColor: "white",
      headerStyle: {backgroundColor: "#FF5555"}}} />
        <Stack.Screen name="Register" component={Register} options={{headerMode:"screen",
      headerTintColor: "white",
      headerStyle: {backgroundColor: "#FF5555"}}} />      
      <Stack.Screen name="DetailList" component={DetailList} options={{headerShown: false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Container