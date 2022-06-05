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

import { Back } from "../../../assets/img";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={props.costumClick}>
        <Image source={Back} style={styles.Back} />
      </TouchableOpacity>
      <Text style={styles.judulHeader}>{props.title}</Text>
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
  Back: {
    width: 53,
    height: 53,
    marginLeft: 15,
  },
  judulHeader: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 65,
    marginTop: 15,
  },
});
