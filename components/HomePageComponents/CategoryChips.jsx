import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { router } from 'expo-router';

const CategoryChips = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fiction');
  
  const categories = [
    'Fiction',
    'Non-Fiction',
    'Religion & Spirituality',
    'Education & Academic',
    'Poetry & Literature',
    'Humor & Entertainment',
    'Business & Personal Development'
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    router.push('/Library');
  };

  return (
    <View className="mt-6 mb-4">
      <Text className="font-pbold text-xl text-textPrimary px-4 mb-3">
        Explore by Category
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="pb-2"
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <TouchableOpacity
              key={category}
              onPress={() => handleCategoryPress(category)}
              className={`px-4 py-2 mr-3 rounded-full ${
                isSelected ? 'bg-primary' : 'bg-neutral-200'
              }`}
              activeOpacity={0.7}
            >
              <Text
                className={`font-pmedium ${
                  isSelected ? 'text-white' : 'text-textPrimary'
                }`}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryChips;
