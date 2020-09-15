import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "../components/Text";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            title="Nathan Smith"
            subTitle="5 Listings"
            image={require("../assets/fi.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  userContainer: {
    marginTop: 30,
  },
});

export default ListingDetailsScreen;
