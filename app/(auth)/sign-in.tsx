import SignInModule from "@/modules/auth/signin-module";
import React, { FC } from "react";
import { SafeAreaView } from "react-native";

const SignIn: FC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <SignInModule />
    </SafeAreaView>
  );
};

SignIn.displayName = "SignIn";

export default SignIn;
