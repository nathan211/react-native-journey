import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCorrect={false}
          autoCapitalize="none"
          icon="lock"
          name="password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry
        />
        <SubmitButton title="login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
