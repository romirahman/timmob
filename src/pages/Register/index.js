import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Register = (navigation) => {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
