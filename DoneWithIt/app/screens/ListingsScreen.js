import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Jacket for sale!",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale!",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
