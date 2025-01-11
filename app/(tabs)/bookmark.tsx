import React, { FC } from "react";
import { Text, View } from "react-native";

interface IBookMarkProps {}

const BookMark: FC<IBookMarkProps> = () => {
  return (
    <View className="">
      <Text>BookMark</Text>
    </View>
  );
};

BookMark.displayName = "BookMark";

export default BookMark;
