import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function LogoComponent() {
  return (
      <View className="w-20 h-20 items-center justify-center rounded-full bg-primary mb-2">
        <View className="relative items-center justify-center">
          <Ionicons name="book" size={28} color="#F4F6F6" />
          <Ionicons 
            name="analytics-outline" 
            size={21} 
            color="#F4F6F6" 
            style={{ position: 'absolute', top: -8, right: -12 }}
          />
        </View>
      </View>
  );
};
export default LogoComponent;
