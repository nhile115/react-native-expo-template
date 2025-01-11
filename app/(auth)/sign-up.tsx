import { Button } from "@/shadcn-ui/ui";
import images from "@/constants/images";
import React, { FC } from "react";
import { SafeAreaView } from "react-native";

import SignUpModule from "@/modules/auth/signup-module";

const SignUp: FC = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <SignUpModule />
    </SafeAreaView>
  );
};

SignUp.displayName = "SignUp";

export default SignUp;
