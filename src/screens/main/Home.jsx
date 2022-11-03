import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import images from "../../../assets";
import THEMES, { width } from "../../config/themes";
import Announce from "../../components/Announce";
import { getPopularMovies } from "../../db";
import { PopularList } from "../../components";

const { colors } = THEMES;

const Home = () => {
  const [showAnnounce, setShowAnnounce] = useState(true);
  const [error, setError] = useState(false);
  const [popularMovies, setPopularMovies] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((movies) => {
        setPopularMovies(movies);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.rowb}>
        <TouchableOpacity onPress={() => console.log("profile")}>
          <Image source={images.profile} style={styles.profile} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => console.log("profile")}
        >
          <Image
            source={images.menu}
            style={styles.menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      {showAnnounce && (
        <Announce
          img={images.announce}
          label="Watch favorite movies without any ads"
          hideAnnounce={() => setShowAnnounce(false)}
        />
      )}
      <View style={styles.separator} />
      <PopularList data={popularMovies} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBg,
    paddingTop: 38,
  },
  rowb: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  menuBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgrey,
  },
  menu: {
    width: 16,
    height: 16,
    transform: [{ rotate: "180deg" }],
    tintColor: colors.white,
  },
  separator: { height: 20 },
});
