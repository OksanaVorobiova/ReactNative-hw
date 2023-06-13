import { StyleSheet, Dimensions } from "react-native";

const d = Dimensions.get("window");

export const bgImgStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: d.width,
    height: d.height,
  },
});
