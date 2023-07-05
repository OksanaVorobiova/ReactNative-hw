import { StyleSheet } from "react-native";

export const postsList = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  postContainer: {
    marginTop: 32,
    alignItems: "flex-start",
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  descr: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 8,
  },
  title: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Medium",
  },
  commentsNum: {
    color: "#bdbdbd",
    fontSize: 16,
    fontFamily: "Regular",
  },
  location: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Regular",
    textDecorationLine: "underline",
  },
  pressableContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});
