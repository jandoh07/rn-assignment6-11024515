import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderContext from "../context/HeaderContext";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  const { screen } = useContext(HeaderContext);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        {screen === "home" ? (
          <Image source={require("../assets/Menu.png")} />
        ) : (
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Home")}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require("../assets/Logo.png")} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity>
          <Image source={require("../assets/Search.png")} />
        </TouchableOpacity>
        {screen === "home" && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Image source={require("../assets/shoppingBag.png")} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Header;
