import { View, Text, ScrollView } from "react-native";
import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/HomePageComponents/Header";

function Home() {
  






  return (
    <SafeAreaView className = "bg-backgroundLight h-full">
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
