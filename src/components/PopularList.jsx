import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import THEMES, { width } from "../config/themes";

const { colors } = THEMES;
const popImgW = width - 150;
const VISIBLE_ITEMS = 3;
const PopularMovie = ({ item, index }) => {
  return (
    <View style={styles.popularMovies}>
      <Image
        style={styles.popularBackdrop}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
      />
    </View>
  );
};

const PopularList = ({ data }) => {
  return (
    <View>
      <View style={styles.rowb}>
        <Text style={styles.categorieTitle}>Popular</Text>
        <TouchableOpacity onPress={() => console.log("view all")}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 20, width, height: popImgW * 1.7 }}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <PopularMovie item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default PopularList;

const styles = StyleSheet.create({
  rowb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  categorieTitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: 12,
    color: colors.grey,
  },
  popularMovies: {
    width: popImgW,
    height: popImgW * 1.5,
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    elevation: 8,
  },
  popularBackdrop: {
    width: popImgW,
    height: popImgW * 1.5,
  },
});
