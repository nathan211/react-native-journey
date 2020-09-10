import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ children, style, ...othersProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...othersProps}>
      {children}
    </Text>
  );
}

export default AppText;
