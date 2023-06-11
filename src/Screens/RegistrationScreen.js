import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "../styles/form";

const basicFormState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [formData, setFormData] = useState(basicFormState);

  const [focus, setFocus] = useState({
    login: false,
    email: false,
    password: false,
  });

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
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/add.png")}
              style={styles.add}
            />
          </View>

          <Text style={styles.title}>Реєстрація</Text>
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
                borderColor: focus.login ? "#ff6c00" : "#e8e8e8",
              }}
              placeholder="Логін"
              placeholderTextColor={"#bdbdbd"}
              onFocus={() => {
                setIsKeyboardShown(true);
                setFocus((prevState) => ({ ...prevState, login: true }));
              }}
              onBlur={() =>
                setFocus((prevState) => ({ ...prevState, login: false }))
              }
              value={formData.login}
              onChangeText={(value) =>
                setFormData((prevState) => ({ ...prevState, login: value }))
              }
            />
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
            onPress={onFormSubmit}
          >
            <Text style={styles.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Вже є акакунт? Увійти</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
