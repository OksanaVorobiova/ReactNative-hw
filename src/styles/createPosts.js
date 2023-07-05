import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const contentBlockHeight = (Dimensions.get("window").height * 34) / 100;

export const createPosts = StyleSheet.create({
  trash: {
    width: 70,
    height: 40,
    backgroundColor: "#f6f6f6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: Dimensions.get("window").width / 2 - 35,
    bottom: 16,
    // transform: [{ translateX: -25 }],
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    padding: 32,
    paddingHorizontal: 16,
  },
  cameraFrame: {
    width: 60,
    height: 60,
    // padding: 15,
    borderRadius: 60,
    //  backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentBlock: {
    width: "100%",
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 240,
  },
  text: {
    color: "#bdbdbd",
    fontSize: 16,
    fontFamily: "Regular",
    marginTop: 8,
    marginBottom: 16,
  },
  input: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 15,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
  },
  btn: {
    marginTop: 32,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    //  backgroundColor: "#F6F6F6",
    paddingVertical: 16,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Regular",
    // color: "#bdbdbd",
  },
  mapIcon: {
    position: "absolute",
    left: 0,
    bottom: 16,
    marginRight: 4,
  },
  img: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    borderColor: "red",
    height: "100%",
    borderRadius: 8,
  },
});
