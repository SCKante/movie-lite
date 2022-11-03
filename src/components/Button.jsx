import { Text, View } from "react-native";
import React from "react";
import THEMES from "../config/themes";

const { colors } = THEMES;
const Button = ({ label, primary, width }) => {
  return (
    <View
      style={{
        height: 40,
        width: width,
        borderRadius: primary ? 8 : 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primary ? colors.primary : colors.secondary,
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "600", color: colors.white }}>
        {label}
      </Text>
    </View>
  );
};

export default Button;
