import React from "react";
import { Header as AppHeader } from "react-native-elements";

const Header = () => (
  <AppHeader
    placement="center"
    leftComponent={{ icon: "menu", color: "#fff" }}
    centerComponent={{
      text: "Pinetar",
      style: { color: "#fff" }
    }}
    rightComponent={{ icon: "home", color: "#fff" }}
  />
);

export default Header;
