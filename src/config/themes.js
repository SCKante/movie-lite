import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

const THEMES = {
  colors: {
    mainBg: "#0C1216",
    primary: "#0fa226",
    secondary: "#3456ff",
    white: "#fff",
    lightgrey: "rgba(255, 255, 255, 0.2)",
    grey: "#899588",
  },
};

export default THEMES;
