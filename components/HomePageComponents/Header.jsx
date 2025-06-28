import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from '../../constants/images'

function Header(){
  const [userName, setUserName] = useState('Abdul Karim');
    
  return (
    <View className="w-full bg-backgroundLight-dark py-6 px-5 flex-row justify-between items-center border-b border-neutral-200 h-24">
      <View>
        <Text className="text-textPrimary text-2xl font-pbold">Welcome back, {userName.split(' ')[0]} 👋</Text>
      </View>
      <Image source={Avatar} className="h-14 w-14 rounded-full" />
    </View>
  )
}

export default Header