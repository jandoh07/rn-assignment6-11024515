import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderContext from "../context/HeaderContext";

const CartScreen = () => {
  const [cart, setCart] = useState([]);
  const { setScreen } = useContext(HeaderContext);

  useEffect(() => {
    const getCart = async () => {
      try {
        const value = await AsyncStorage.getItem("cart");
        setCart(JSON.parse(value));
        setScreen("cart");
      } catch (error) {
        console.log(error);
      }
    };
    getCart();

    return () => {
      setScreen("home");
    };
  }, []);

  const removeFromCart = async (item) => {
    try {
      const value = await AsyncStorage.getItem("cart");
      let cart = value ? JSON.parse(value) : [];
      const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
      await AsyncStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>CHECKOUT</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={{ width: 120 }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{ width: "100%" }}
              />
            </View>
            <View>
              <Text
                style={{ fontSize: 20, fontWeight: "400", paddingVertical: 2 }}
              >
                {item.category}
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "400", paddingVertical: 2 }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: "orange",
                  paddingVertical: 2,
                }}
              >
                {item.price}
              </Text>
              <TouchableOpacity
                style={{
                  paddingVertical: 2,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
                onPress={() => removeFromCart(item)}
              >
                <Image source={require("../assets/remove.png")} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    paddingVertical: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 180,
  },
});

export default CartScreen;
