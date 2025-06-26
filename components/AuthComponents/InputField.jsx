import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const InputField = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  error = ''
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View className="mb-4 w-full">
      <Text className="font-pmedium text-textPrimary mb-2">{label}</Text>
      <View className="relative flex-row items-center">
        <TextInput
          className={`bg-neutral-200 rounded-lg px-4 py-3 w-full font-pregular text-textPrimary ${error ? 'border border-error' : ''}`}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8F9696"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {secureTextEntry && (
          <TouchableOpacity 
            className="absolute right-3" 
            onPress={togglePasswordVisibility}
          >
            <Ionicons 
              name={isPasswordVisible ? 'eye-off' : 'eye'} 
              size={24} 
              color="#536870" 
            />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text className="text-error text-sm mt-1 font-pregular">{error}</Text> : null}
    </View>
  );
};

export default InputField;
