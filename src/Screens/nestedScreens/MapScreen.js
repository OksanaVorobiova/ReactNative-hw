import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { bgImgStyles } from "../../styles/bg-img";
import MapView, { Marker } from "react-native-maps";
import { mapStyles } from "../../styles/map";
import { useState, useEffect } from "react";

export const MapScreen = ({ route }) => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    if (route.params) {
      setCoords(route.params);
    }
  }, []);

  return (
    <View>
      <MapView
        style={mapStyles.mapContainer}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: coords.latitude,
            longitude: coords.longitude,
          }}
        />
      </MapView>
    </View>
  );
};
