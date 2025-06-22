import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function LogoComponent() {
  return (
    <View className="items-center justify-center">
      <View className="w-24 h-24 items-center justify-center rounded-full bg-primary mb-2">
        <View className="relative items-center justify-center">
          <Ionicons name="book" size={32} color="#F4F6F6" />
          <Ionicons 
            name="analytics-outline" 
            size={24} 
            color="#F4F6F6" 
            style={{ position: 'absolute', top: -8, right: -12 }}
          />
        </View>
      </View>
    </View>
  );
};

export default LogoComponent;
