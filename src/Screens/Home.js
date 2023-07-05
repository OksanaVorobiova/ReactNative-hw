import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { headerStyle } from "../styles/header";
import { useNavigation } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Публікація";

  switch (routeName) {
    case "DefaultScreenPost":
      return "Публікації";

    case "Comments":
      return "Коментарі";

    case "Map":
      return "Мапа";
  }
}

function getHeaderLeft(route, navigation) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === "Comments" || routeName === "Map") {
    return () => {
      return (
        <View>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            style={{ marginLeft: 20 }}
            onPress={() => navigation.navigate("DefaultScreenPost")}
          />
        </View>
      );
    };
  }

  return null;
}

function getHeaderRight(route) {
  const routeName = getFocusedRouteNameFromRoute(route);

  if (routeName === "Comments" || routeName === "Map") {
    return null;
  }
  return () => {
    return (
      <View>
        <Image
          source={require("../../assets/log-out.png")}
          style={headerStyle.logout}
        />
      </View>
    );
  };
}

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => {
        return {
          title: "Публікації",
          tabBarStyle: {
            paddingTop: 9,
            paddingBottom: 22,
            paddingHorizontal: 82,
            borderTopColor: "#bdbdbd",
            borderTopWidth: 1,
            height: 71,
            gap: 10,
            flexDirection: "row",
            justifyContent: "center",
            //alignItems: "center",
          },
          tabBarLabel: "",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#212121",
          tabBarActiveBackgroundColor: "#ff6c00",
          tabBarInactiveBackgroundColor: "transparent",
          tabBarItemStyle: {
            // alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            width: 70,
            height: 40,
            paddingTop: 7,
            paddingBottom: 0,
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
            return <AntDesign name={iconName} size={20} color={color} />;
          },
        };
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomColor: "#bdbdbd",
            borderBottomWidth: 1,
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Medium",
            fontSize: 17,
          },

          headerLeft: getHeaderLeft(route, navigation),
          headerRight: getHeaderRight(route),
        })}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          headerTitle: "Створити публікацію",
          headerTitleAlign: "center",
          headerStyle: {
            borderBottomColor: "#bdbdbd",
            borderBottomWidth: 1,
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Medium",
            fontSize: 17,
          },
          headerRight: null,
          headerLeft: () => {
            return (
              <View>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="black"
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.navigate("Posts")}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};
