import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/form";
import { bgImgStyles } from "../styles/bg-img";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const basicFormState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [formData, setFormData] = useState(basicFormState);
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });
  const navigation = useNavigation();

  const hideKeyboard = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };

  const onFormSubmit = () => {
    hideKeyboard();
    console.log(formData);
    setFormData(basicFormState);
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <ImageBackground
        source={require("../../assets/bg.png")}
        resizeMode="cover"
        style={bgImgStyles.background}
      >
        <View style={{ ...styles.container, justifyContent: "flex-start" }}>
          <View
            style={{ ...styles.mainContainer, justifyContent: "flex-start" }}
          >
            <Text style={{ ...styles.title, marginTop: 16 }}>Увійти</Text>
            <KeyboardAvoidingView
              style={{
                gap: 16,
                width: "100%",
              }}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={{
                  ...styles.textInput,
                  borderColor: focus.email ? "#ff6c00" : "#e8e8e8",
                }}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#bdbdbd"}
                onFocus={() => {
                  setIsKeyboardShown(true);
                  setFocus((prevState) => ({ ...prevState, email: true }));
                }}
                onBlur={() =>
                  setFocus((prevState) => ({ ...prevState, email: false }))
                }
                value={formData.email}
                onChangeText={(value) =>
                  setFormData((prevState) => ({ ...prevState, email: value }))
                }
                inputMode="email"
              />
              <View style={styles.passwordInputCont}>
                <TextInput
                  style={{
                    ...styles.textInput,
                    borderColor: focus.password ? "#ff6c00" : "#e8e8e8",
                  }}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  placeholderTextColor={"#bdbdbd"}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setFocus((prevState) => ({ ...prevState, password: true }));
                  }}
                  onBlur={() =>
                    setFocus((prevState) => ({ ...prevState, password: false }))
                  }
                  value={formData.password}
                  onChangeText={(value) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                ></TextInput>
                <Text style={styles.show}>Показати</Text>
              </View>
            </KeyboardAvoidingView>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.btn}
              onPress={() => {
                onFormSubmit();
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.btnText}>Увійти</Text>
            </TouchableOpacity>
            <Text
              style={styles.loginText}
              onPress={() => navigation.navigate("Registration")}
            >
              Немає аккаунту? Зараєструватися
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
