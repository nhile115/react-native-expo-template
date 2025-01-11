import React, { FC } from "react";
import { Text, View } from "react-native";

interface ICreateProps {}

const Create: FC<ICreateProps> = () => {
  return (
    <View className="">
      <Text>Create</Text>
    </View>
  );
};

Create.displayName = "Create";

export default Create;
