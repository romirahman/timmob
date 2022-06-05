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
import Header2 from "../../component/Header2";
import MyButton from "./../../component/Button";

const Employe = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header2
        title="Employe"
        costumClick={() => navigation.navigate("Homepage")}
      />
    </View>
  );
};

export default Employe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
});
