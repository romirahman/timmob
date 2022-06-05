import React, { useEffect, useState } from "react";
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
import MyButton from "../../component/Button";
import Patners from "../../component/Patners";
import Employe from "../Karyawan";
import Produk from "../Produk";
import { DatabaseConnection } from "./../../database/database-connection";

const db = DatabaseConnection.getConnection();

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          {/* BANNER */}
          <Image source={Banner} style={styles.Banner} />

          {/* TOMBOL */}
          <View style={styles.btn_view}>
            <MyButton
              title="Employe"
              source={Karyawan}
              costumClick={() => navigation.navigate(Employe)}
            />
            <MyButton
              title="Merchandise"
              source={Chart}
              costumClick={() => navigation.navigate(Produk)}
            />
          </View>

          {/* SPONSOR */}
          <Patners />

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
  },
  btn_view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 8,
  },
  content: {
    padding: 10,
  },
  Banner: {
    marginTop: 10,
    width: 416,
    height: 225,
  },
});
