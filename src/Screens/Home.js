import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        title: "",
        tabBarStyle: {
          paddingVertical: 9,
          borderTopColor: "#bdbdbd",
          borderTopWidth: 1,
        },
        tabBarIconStyle: {
          margin: "auto",
        },
        tabBarActiveTintColor: "#fff",
        //  tabBarActiveBackgroundColor: "#ff6c00",
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          width: 70,
          height: 40,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = "appstore-o";
          } else if (route.name === "CreatePosts") {
            iconName = "plus";
          } else if (route.name === "Profile") {
            iconName = "user";
          }
          return <AntDesign name={iconName} size={size} color="#212121" />;
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
