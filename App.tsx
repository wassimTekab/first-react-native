import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ExploreScreen from "./screens/ExploreScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import DragSort from "./screens/DragSort";
export type RootStackParams = {
  Restaurants: undefined;
  Explore: undefined;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};
const RootStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView
        style={{ padding: 20, flex: 1, alignItems: "center", marginTop: 20 }}
      >
        <Text>Restaurant App</Text>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>Explore</Text>
          <Text>Restaurants</Text>
          <Text>Profile</Text>
        </View>
      </SafeAreaView> */}
      <RootStack.Navigator>
        <RootStack.Screen name="Explore" component={ExploreScreen} />
        <RootStack.Screen name="Restaurants" component={RestaurantsScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
        <RootStack.Screen name="DragSort" component={DragSort} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
