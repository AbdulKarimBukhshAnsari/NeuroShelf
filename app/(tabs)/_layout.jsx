import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome , AntDesign , Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabsLayout = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#3B5B5B",
        tabBarInactiveTintColor: "#8F9696",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F7F9F9",
          height: 65 + insets.bottom,
          paddingBottom: 10 + insets.bottom,
          paddingTop: 10,
          borderTopWidth: 1,
          borderTopColor: "#E1E6E6",
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Medium",
          fontSize: 12,
        },
      })}
      safeAreaInsets={{ bottom: 0 }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome 
                size={focused ? 30 : 24} 
                name="home" 
                color={color} 
                style={{
                  transform: [{ scale: focused ? 1.1 : 1 }],
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Library"
        options={{
          title: "Library",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons 
                name="library-outline" 
                size={focused ? 30 : 24} 
                color={color}
                style={{
                  transform: [{ scale: focused ? 1.1 : 1 }],
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Scan"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 60,
                height: 60,
                backgroundColor: focused ? "#2B4242" : "#3B5B5B",
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: -30,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 8,
                borderWidth: 3,
                borderColor: "#FFF7FF",
              }}
            >
              <Ionicons 
                name="scan" 
                size={32} 
                color="white" 
                style={{
                  transform: [{ scale: focused ? 1.1 : 1 }],
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Whishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <Ionicons 
                name="bookmark" 
                size={focused ? 30 : 24} 
                color={color}
                style={{
                  transform: [{ scale: focused ? 1.1 : 1 }],
                }}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign 
                size={focused ? 30 : 24} 
                name="user" 
                color={color}
                style={{
                  transform: [{ scale: focused ? 1.1 : 1 }],
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
