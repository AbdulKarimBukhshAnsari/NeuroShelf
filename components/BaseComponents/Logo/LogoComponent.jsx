import React from 'react';
import { View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function LogoComponent() {
  return (
      <View className="w-36 h-36 items-center justify-center rounded-full bg-primary mb-5 top-10">
        <View className="relative items-center justify-center">
          <Ionicons name="book" size={44} color="#F4F6F6" />
          <Ionicons 
            name="analytics-outline" 
            size={40} 
            color="#F4F6F6" 
            style={{ position: 'absolute', top: -17, right: -20 }}
          />
        </View>
      </View>
  );
};

export default LogoComponent;
