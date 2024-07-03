import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Header from "./components/Header";
import { HeaderProvider } from "./context/HeaderContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HeaderProvider>
      <NavigationContainer>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </HeaderProvider>
  );
}
