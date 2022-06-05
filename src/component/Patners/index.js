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
import Header from "../../component/Header";
import {
  Banner,
  Chart,
  Karyawan,
  PopMie,
  LinkAja,
  TopCoffee,
  PoshMen,
  Axis,
} from "../../../assets/img";

const Patners = () => {
  return (
    <View style={styles.patners}>
      <Text style={styles.judulPatners}> OUR PATNERS</Text>
      <View style={styles.patners1}>
        <Image source={PopMie} style={styles.PopMie} />
        <Image source={LinkAja} style={styles.LinkAja} />
        <Image source={TopCoffee} style={styles.TopCoffee} />
      </View>
      <View style={styles.patners2}>
        <Image source={PoshMen} style={styles.PoshMen} />
        <Image source={Axis} style={styles.axis} />
      </View>
    </View>
  );
};

export default Patners;

const styles = StyleSheet.create({
  patners: {
    marginTop: 50,
  },

  judulPatners: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  patners1: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  patners2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  PopMie: {
    width: 97,
    height: 95,
  },
  LinkAja: {
    width: 88,
    height: 88,
  },
  TopCoffee: {
    width: 106,
    height: 96,
  },
  PoshMen: {
    width: 162,
    height: 119,
  },
  axis: {
    width: 120,
    height: 82,
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  LD: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
