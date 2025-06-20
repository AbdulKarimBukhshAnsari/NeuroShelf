import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-orange-100">
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="items-center mt-10 mb-6">
          <Text className="text-white text-3xl font-bold">📚 Neuro Shelf</Text>
          <Text className="text-gray-400 mt-2 text-base">
            Your smart book assistant
          </Text>
        </View>

        <View className="bg-white rounded-xl p-5 mb-5 shadow-lg">
          <Text className="text-xl font-semibold text-black">Atomic Habits</Text>
          <Text className="text-gray-700 mt-1">by James Clear</Text>
          <TouchableOpacity className="bg-black mt-4 py-2 px-4 rounded-full self-start">
            <Text className="text-white font-medium">Mark as Read</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-xl p-5 mb-5 shadow-lg">
          <Text className="text-xl font-semibold text-black">Deep Work</Text>
          <Text className="text-gray-700 mt-1">by Cal Newport</Text>
          <TouchableOpacity className="bg-black mt-4 py-2 px-4 rounded-full self-start">
            <Text className="text-white font-medium">Mark as Read</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-green-600 py-3 rounded-xl items-center mt-6">
          <Text className="text-white text-lg font-semibold">+ Add New Book</Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
