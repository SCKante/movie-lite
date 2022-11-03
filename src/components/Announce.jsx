import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import THEMES, { width } from "../config/themes";
import Button from "./Button";
const { colors } = THEMES;
const Announce = ({ label, img, hideAnnounce }) => {
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.bg}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={hideAnnounce} style={styles.close}>
        <Text style={{ color: colors.white }}>X</Text>
      </TouchableOpacity>
      <Button width={"50%"} label="Get premium" primary />
    </View>
  );
};

export default Announce;

const styles = StyleSheet.create({
  container: {
    width: width - 32,
    height: 130,
    padding: 14,
    paddingTop: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: colors.lightgrey,
    alignSelf: "center",
  },
  bg: {
    position: "absolute",
    height: 130,
    width: width - 32,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  label: {
    fontSize: 18,
    color: colors.white,
    width: (width - 32) * 0.6,
    marginBottom: 10,
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grey,
  },
});
