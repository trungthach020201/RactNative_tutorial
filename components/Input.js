import react from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  secureTextEntry = "false",
  keyboardType = "default",
}) => {
  return (
    <View>
      <Text style={{ width: "100%", fontWeight: "600" }}>{name}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 300,
    borderBottomWidth: 0.5,
    borderBottomColor: "#8393a1",
    marginBottom: 20,
    backgroundColor: "white",
  },
});

export default UserInput;
