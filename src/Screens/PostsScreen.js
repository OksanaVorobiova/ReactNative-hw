import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreenPost } from "./nestedScreens/DefaultScreenPost";
import { CommentsScreen } from "./nestedScreens/CommentsScreen";
import { MapScreen } from "./nestedScreens/MapScreen";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

const NestedScreen = createStackNavigator();

export const PostsScreen = () => {
  return (
    <NestedScreen.Navigator
      initialRouteName="DefaultsScreenPost"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <NestedScreen.Screen
        name="DefaultScreenPost"
        component={DefaultScreenPost}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
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
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};
