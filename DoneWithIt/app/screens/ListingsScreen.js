import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Card from "../components/Card";
import listingApi from "../api/listings";
import colors from "../config/colors";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingApi.getListings);

  useEffect(() => {
    getListingsApi(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.container}>
      {getListingsApi.error && (
        <>
          <AppText style={{ alignSelf: "center" }}>
            Couldn't retrive the listings.
          </AppText>
          <Button title="Retry" onPress={getListingsApi.loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
