import client from "./client";

const endpoint = "/listings";

const getListings = (1, b, c) => client.get(endpoint);

export default {
  getListings,
};
