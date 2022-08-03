import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";

const PassInput = ({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry,
  setPasswordVisible,
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
        right={
          <TextInput.Icon
            name={secureTextEntry ? "eye" : "eye-off"}
            onPress={() => setPasswordVisible(!secureTextEntry)}
          />
        }
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

export default PassInput;
