import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import UserInput from "../components/Input";
import PassInput from "../components/inputPass";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert("All field must be filled");
      setLoading(false);
      return;
    }
    try {
      alert("LogIn Success");
    } catch (error) {
      alert("LogIn fail");
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Log In</Text>
      <UserInput
        name="Email"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
      />
      <PassInput
        name="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={passwordVisible}
        autoCompleteType="password"
        setPasswordVisible={setPasswordVisible}
      />
      <TouchableOpacity style={styles.submit} onPress={() => handleSubmit()}>
        <Text>{loading ? "Waiting..." : "LogIn"}</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Do not have account?{" "}
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ color: "blue" }}
        >
          Sign Up
        </Text>
      </Text>
      <Text style={{ marginTop: 10, color: "red" }}>Forget Password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    backgroundColor: "white",
  },
  logo: {
    width: 270,
    height: 150,
    marginBottom: 10,
    marginVertical: 60,
  },
  title: {
    fontSize: 27,
    color: "#2b3494",
    fontWeight: "bold",
    marginBottom: 30,
  },
  submit: {
    backgroundColor: "#FF9900",
    height: 40,
    justifyContent: "center",
    borderRadius: 24,
    marginHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
});
export default LogIn;
