import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { bgImgStyles } from "../../styles/bg-img";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { postsList } from "../../styles/posts";
import { useRoute } from "@react-navigation/native";

export const DefaultScreenPost = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);

  return (
    <View style={postsList.container}>
      <View>
        <Image />
        <Text></Text>
        <Text></Text>
      </View>
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={postsList.postContainer}>
                <Image source={{ uri: item.photo }} style={postsList.img} />
                <Text style={postsList.title}>{item.title || ""}</Text>
                <View style={postsList.descr}>
                  <TouchableOpacity
                    style={postsList.pressableContainer}
                    activeOpacity={1}
                    onPress={() => navigation.navigate("Comments")}
                  >
                    <Feather name="message-circle" size={24} color="#bdbdbd" />
                    <Text style={postsList.commentsNum}></Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={postsList.pressableContainer}
                    activeOpacity={1}
                    onPress={() =>
                      navigation.navigate("Map", { coords: item.coords })
                    }
                  >
                    <Feather name="map-pin" size={24} color="#bdbdbd" />
                    <Text style={postsList.location}>
                      {item.location || ""}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
