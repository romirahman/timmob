import react from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
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

const Produk = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header2
        title="Merchandise"
        costumClick={() => navigation.navigate("Homepage")}
      />
      <View style={styles.btn_prdk}>
        <MyButton title="Tambah" />
        <MyButton title="Hapus" />
        <MyButton title="Edit" />
      </View>
      <View style={styles.list}>
        {/* <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          data={flatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => listItemView(item)}
        /> */}
      </View>
    </View>
  );
};

export default Produk;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  btn_prdk: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
