import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// import "react-native-gesture-handler";
import * as React from "react";
import { useEffect } from "react";
import { LogoEvos } from "../../../assets/img";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Homepage");
    }, 5000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={LogoEvos} style={styles.LogoEvos} />
      <StatusBar style="auto" />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8DD8F8",
    alignItems: "center",
    justifyContent: "center",
  },
  LogoEvos: {
    width: 199,
    height: 192,
  },
});
