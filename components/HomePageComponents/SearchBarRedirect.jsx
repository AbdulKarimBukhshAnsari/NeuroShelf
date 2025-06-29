import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const SearchBarRedirect = ({ customStyles }) => {
  const handlePress = () => {
    router.push('/Library');
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      className={`flex-row items-center bg-neutral-200 rounded-xl px-4 py-3 ${customStyles}`}
      activeOpacity={0.7}
    >
      <Feather name="search" size={18} color="#536870" />
      <Text className="font-pregular text-textSecondary ml-3">
        Search your books...
      </Text>
    </TouchableOpacity>
  );
};

export default SearchBarRedirect;
