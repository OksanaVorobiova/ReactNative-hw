import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { createPosts } from "../styles/createPosts";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    coords: {},
  });
  //const [coords, setCoords] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const sendForm = (coordinates) => {
    //console.log(photo);
    navigation.navigate("DefaultScreenPost", {
      photo,
      title: formData.title,
      location: formData.location,
      coords: coordinates,
    });
  };

  /* const takeCoords = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync({});
      const photoCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      setCoords(photoCoords);

      //console.log("coords took", photoCoords);

      return photoCoords;
      // console.log("coords in takeCoords func", formData);
      // console.log("coords in state", formData.coords);
    }

    console.log("Permission needed");
    return {};
  }; */

  async function onPostCreate() {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission needed");
    }

    let location = await Location.getCurrentPositionAsync({});

    const photoCoords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setFormData((prevState) => ({ ...prevState, coords: photoCoords }));

    console.log("coords taken", photoCoords);

    //console.log("coords in formData", formData.coords);

    sendForm(photoCoords);
    setFormData({ title: "", location: "", coords: {} });
    setPhoto(null);
  }

  return (
    <View style={createPosts.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <View style={createPosts.contentBlock}>
          <Camera
            ref={setCameraRef}
            type={type}
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
              zIndex: 100,
              position: "relative",
            }}
          >
            <View style={{ borderRadius: 8 }}></View>
            {photo && (
              <View style={createPosts.img}>
                <Image
                  source={{ uri: photo }}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            )}
            <TouchableOpacity
              style={{
                ...createPosts.cameraFrame,
                backgroundColor: hasPermission ? "#ffffff4d" : "#ffffff",
              }}
              onPress={async () => {
                if (cameraRef) {
                  const { uri } = await cameraRef.takePictureAsync();
                  await MediaLibrary.createAssetAsync(uri);
                  setPhoto(uri);
                }
              }}
            >
              <FontAwesome
                name="camera"
                size={24}
                color={hasPermission ? "#ffffff" : "#bdbdbd"}
              />
            </TouchableOpacity>
          </Camera>
        </View>
      </View>
      <Text style={createPosts.text}>Завантажте фото</Text>
      <TextInput
        placeholder="Назва..."
        style={createPosts.input}
        onChangeText={(value) =>
          setFormData((prevState) => ({ ...prevState, title: value }))
        }
        value={formData.title}
      ></TextInput>
      <View
        style={{
          position: "relative",
        }}
      >
        <Feather
          name="map-pin"
          size={24}
          color="#bdbdbd"
          style={createPosts.mapIcon}
        />
        <TextInput
          placeholder="          Місцевість..."
          style={createPosts.input}
          onChangeText={(value) =>
            setFormData((prevState) => ({ ...prevState, location: value }))
          }
          value={formData.location}
        ></TextInput>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          ...createPosts.btn,
          backgroundColor: photo ? "#ff6c00" : "#f6f6f6",
        }}
        disabled={photo ? false : true}
        onPress={onPostCreate}
      >
        <Text
          style={{ ...createPosts.btnText, color: photo ? "#fff" : "#bdbdbd" }}
        >
          Опублікувати
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={createPosts.trash}
        activeOpacity={1}
        disabled={photo ? false : true}
        onPress={() => {
          setPhoto(null);
        }}
      >
        <Feather name="trash-2" size={24} color="#bdbdbd" />
      </TouchableOpacity>
    </View>
  );
};
