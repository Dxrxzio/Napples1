import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Login_Screen from "./Components/Screens/Login_Screen";

const slides = [
  {
    key: "one",
    title: "WELCOME TO YOUR SAFE SPACE",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./assets/onboarding1.jpg"),
  },
  {
    key: "two",
    title: "FINANCES AT YOUR FINGERTIPS",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./assets/onboarding2.jpg"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./assets/onboarding3.jpg"),
  },
];

export default class App extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            paddingTop: 15,
            paddingBottom: 10,
            marginTop: 50,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            textAlign: "center",
          }}
        >
          {item.title}
        </Text>

        <Image
          source={item.image}
          style={{
            marginTop: 104,
            alignSelf: "center",
            resizeMode: "contain",
            height: 100,
            width: 300,
            size: 150,
            marginBottom: 50,
          }}
        />

        <Text
          style={{
            marginTop: 25,
            textAlign: "center",
            color: "#b5b5b5",
            fontSize: 15,
            paddingHorizontal: 30,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage) {
      return <App />;
    } else
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#21465b",
            width: 30,
          }}
        />
      );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
