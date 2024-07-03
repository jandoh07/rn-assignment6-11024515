import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const addToCart = (item) => {
    return async () => {
      try {
        const value = await AsyncStorage.getItem("cart");
        let cart = value ? JSON.parse(value) : [];
        cart.push(item);
        await AsyncStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.log(error);
      }
    };
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ourStory}>
          <Text style={styles.ourStoryHeading}>Our Story</Text>
          <View style={styles.ourStoryIcons}>
            <TouchableOpacity>
              <Image source={require("../assets/Listview.png")} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("../assets/Filter.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageCatalogue}>
          {imageCatalogue.map((item) => (
            <View style={{ width: 150, overflow: "hidden" }} key={item.id}>
              <View style={{ position: "relative" }}>
                <Image source={item.image} />
                <TouchableOpacity onPress={addToCart(item)}>
                  <Image
                    source={require("../assets/add_circle.png")}
                    style={{ position: "absolute", bottom: 10, right: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "400" }}>
                  {item.category}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "400" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "orange" }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  ourStory: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  ourStoryIcons: {
    flexDirection: "row",
    gap: 10,
  },
  ourStoryHeading: {
    fontSize: 24,
    fontWeight: "500",
  },
  imageCatalogue: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "center",
    gap: 10,
  },
});

const imageCatalogue = [
  {
    id: 1,
    image: require("../assets/dress1.png"),
    category: "Office Wear",
    name: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: 2,
    image: require("../assets/dress2.png"),
    category: "Black",
    name: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: 3,
    image: require("../assets/dress3.png"),
    category: "Church Wear",
    name: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: 4,
    image: require("../assets/dress4.png"),
    category: "Lamerei",
    name: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: 5,
    image: require("../assets/dress5.png"),
    category: "21WN",
    name: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: 6,
    image: require("../assets/dress6.png"),
    category: "Lopo",
    name: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: 7,
    image: require("../assets/dress7.png"),
    category: "Lame",
    name: "reversible angora cardigan",
    price: "$120",
  },
];

export default HomeScreen;
