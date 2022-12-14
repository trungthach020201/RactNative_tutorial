import React, { useState } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import UserInput from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PassInput from "../components/inputPass";

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [passwordVisibleCp, setPasswordVisibleCp] = useState(true);

  const handleSubmit = async () => {
    setLoading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const regPhone = /^[0-9\b]+$/;
    if (!fullName || !phone || !email || !password || !confirmPass) {
      alert("All field should not be empty");
      setLoading(false);
      return;
    } else if (reg.test(email) === false) {
      alert("email InValid");
      setLoading(false);
      return;
    } else if (regPhone.test(phone) === false) {
      alert("Invalid Phone Number");
      setLoading(false);
      return;
    } else if (password != confirmPass) {
      alert("Password and Confirm password do not match");
      setLoading(false);
      return;
    } else if (password.length < 6) {
      alert("Password must be more than 6 characteristics");
      setLoading(false);
      return;
    }
    try {
      alert("SignUp successfull");
    } catch (err) {
      alert("Sign Up fail");
    }
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <UserInput
        name="FullName"
        value={fullName}
        setValue={setFullName}
        autoCapitalize="word"
      />
      <UserInput
        name="Email"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
      />
      <UserInput
        name="Phone"
        value={phone}
        setValue={setPhone}
        keyboardType="numeric"
      />
      <PassInput
        name="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={passwordVisible}
        autoCompleteType="password"
        setPasswordVisible={setPasswordVisible}
      />
      <PassInput
        name="Confirm Password"
        value={confirmPass}
        setValue={setConfirmPass}
        autoCompleteType="password"
        secureTextEntry={passwordVisibleCp}
        setPasswordVisible={setPasswordVisibleCp}
      />
      <TouchableOpacity style={styles.submit} onPress={() => handleSubmit()}>
        <Text>{loading ? "Waiting..." : "Register"}</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Have account?{" "}
        <Text
          onPress={() => navigation.navigate("LogIn")}
          style={{ color: "blue" }}
        >
          Login
        </Text>
      </Text>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
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
export default Register;
