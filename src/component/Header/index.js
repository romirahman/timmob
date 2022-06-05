import react from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { LogoEvos } from "../../../assets/img";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={LogoEvos} style={styles.LogoEvos} />
      <Text style={styles.judulHeader}>EVOS STORE</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#8DD8F8",
    padding: 10,
  },
  LogoEvos: {
    width: 59,
    height: 57,
    marginLeft: 15,
  },
  judulHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 60,
    marginTop: 15,
  },
});
