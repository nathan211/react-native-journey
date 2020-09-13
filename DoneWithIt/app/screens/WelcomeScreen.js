import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={1}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text>Keep working hard!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});

export default WelcomeScreen;
