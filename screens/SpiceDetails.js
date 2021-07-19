import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { useSelector } from "react-redux";

import FooterButton from "../components/FooterButtons";
import CustomTextCmp from "../components/CustomTextCmp";

const SpiceDetails = (props) => {
  const spiceId = props.route.params.spiceId;
  const spice = useSelector((state) =>
    state.spices.userSpices.find((spice) => spice.id === spiceId)
  );

  return (
    <View>
      <Text style={styles.title}>{spice.name}</Text>
      <ImageBackground
        style={styles.image}
        source={require("../assets/herbs.jpg")}
      >
        <View style={styles.screen}>
          <View style={styles.imageContainer}></View>
          <View style={styles.textContainer}>
            <CustomTextCmp style={styles.text}>
              {spice.description}
            </CustomTextCmp>
          </View>

          {/* TODO ---- Add Icon here for shopping cart - add to shopping cart */}

          {spice.amount === 0 ? (
            <Text>Empty</Text>
          ) : (
            <Image
              style={styles.imageShaker}
              source={require("../assets/shaker.png")}
            />
          )}
        </View>
        <View>
          <FooterButton />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    height: "70%",
  },
  textContainer: {
    margin: 15,
    backgroundColor: "rgba(250,250,250,.85)",
    elevation: 20,
    borderRadius: 15,
    padding: 20,
    borderColor: "#2A9E00",
    borderWidth: 0.5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageShaker: {
    resizeMode: "contain",
    height: "30%",
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#444",
    textAlign: "center",
  },
});

export default SpiceDetails;
