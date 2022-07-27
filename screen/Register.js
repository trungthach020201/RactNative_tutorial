import react from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import UserInput from "../components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Register = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <UserInput name="FullName" />
      <UserInput name="Email" />
      <UserInput name="Password" />
      <UserInput name="Confirm Password" />
      <TouchableOpacity style={styles.submit}>
        <Text>Register</Text>
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
