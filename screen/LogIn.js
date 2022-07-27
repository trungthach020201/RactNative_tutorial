import react from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import UserInput from "../components/Input";
const LogIn = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Log In</Text>
      <UserInput name="Email" />
      <UserInput name="Password" />
      <TouchableOpacity style={styles.submit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 50 }}>
        Do not have account? <Text style={{ color: "blue" }}>Sign Up</Text>
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
