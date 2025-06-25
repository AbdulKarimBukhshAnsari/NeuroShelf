import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BGBookMain,
  CornerBorderMain,
  SideBarSheilfMain,
  MainImageMain,
} from "../constants/images";
import LogoComponent from "../components/BaseComponents/Logo/LogoComponent";

export default function Home() {
  const [isPressed, setIsPressed] = useState(false)




  return (
    <SafeAreaView className="bg-backgroundLight h-full  items-center px-4">
      <Image
        source={CornerBorderMain}
        className="absolute top-0 left-0 w-40 h-56"
        resizeMode="contain"
      />
      <Image
        source={BGBookMain}
        className="absolute w-[350px] h-[400px] top-0 left-0 opacity-10 "
        resizeMode="contain"
      />
      <View className="logo-name items-center gap-10">
        <LogoComponent />
        <Text className="font-pbold text-5xl text-primary  tracking-widest">
          NeuroShelf
        </Text>
      </View>
      <Text className="mt-7 text-secondary font-pregular text-3xl italic text-center leading-relaxed  ">
        Remembers your books, so you don’t have to!!
      </Text>
      <Image
        source={MainImageMain}
        className="w-96 h-72 scale-x-[-1]"
        resizeMode="contain"
      />
      <Pressable 
        onPress={() => console.log("Button Pressed")}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        className={`w-[80vw] py-5 rounded-xl mt-7 items-center justify-center ${
          isPressed ? 'bg-primary/80' : 'bg-primary'
        }`}
       style={{
        elevation: 6, // Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
      >
        <Text className="text-center text-3xl text-white font-pmedium ">
          Start
        </Text>
      </Pressable>
      <Image
      source={SideBarSheilfMain}
      resizeMethod="contain"
      className = "absolute bottom-0 right-0 w-48 h-48 -z-40 opacity-10"
      
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}
