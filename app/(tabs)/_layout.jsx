
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor : '#3B5B5B'}} >
        <Tabs.Screen
        name="Home"
        options={{
            title : "Home",
            tabBarIcon : ({color})=> <FontAwesome size={28} name='home' color={color}/>
        }}
        />
        <Tabs.Screen
        name="Setting"
        options={{
            title : "Setting",
            tabBarIcon : ({color})=> <AntDesign size={28} name = "setting" color={color} />
        }}
        />


    </Tabs>

   
  )
}

export default TabsLayout ;