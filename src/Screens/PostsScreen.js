import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { bgImgStyles } from "../styles/bg-img";

export const PostsScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      resizeMode="cover"
      style={bgImgStyles.background}
    >
      <View></View>
    </ImageBackground>
  );
};
