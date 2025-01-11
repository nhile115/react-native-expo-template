import React, { FC } from "react";
import { View, Text } from "react-native";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <View className="">
      <Text>Home</Text>
    </View>
  );
};

Home.displayName = "Home";

export default Home;
