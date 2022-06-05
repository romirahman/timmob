import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MyButton = (props) => {
  return (
    <View style={styles.content_btn}>
      <TouchableOpacity style={styles.btn} onPress={props.costumClick}>
        {/* <Image source={props.source} style={styles.img} /> */}
        <Text style={styles.Text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  content_btn: {
    flex: 1,
    // width: 110,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "#8DD8F8",
    padding: 10,
    borderRadius: 10,
  },
  Text: {
    fontSize: 15,
    fontWeight: "bold",
    // textAlign: "center",
    marginVertical: 8,
    textAlign: "center",
  },
  img: {
    widht: 22.34,
    height: 22.34,
  },
});
