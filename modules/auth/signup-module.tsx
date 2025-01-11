import React, { FC, useState } from "react";
import { Dimensions, View, Image, Text } from "react-native";
import { IBaseComponent } from "@/components/interfaces";
import { cn } from "@/lib/utils";
import images from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Button } from "@/shadcn-ui/ui/button";
import Input from "@/components/input";
import { ICreateUser, ISignInDto } from "@/common/interfaces/uers.interfaces";
import { createUser } from "@/lib/appwrite/user.appwite";

interface ISignUpModuleProps extends IBaseComponent {}

const SignUpModule: FC<ISignUpModuleProps> = ({ className }) => {
  const router = useRouter();
  const [signUpData, setSignUpData] = useState<ICreateUser>({
    email: "",
    password: "",
    userName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValueSignUpData = <K extends keyof ICreateUser>(
    key: K,
    value: ICreateUser[K]
  ) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!signUpData.email || !signUpData.password || !signUpData.userName) {
      console.log("toast");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(signUpData);

      router.replace("/home");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className={cn(className)}>
      <View
        className="w-full flex justify-center h-full px-4 my-6"
        style={{
          minHeight: Dimensions.get("window").height - 100,
        }}
      >
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[115px] h-[34px]"
        />

        <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
          Sign in
        </Text>
        <View className="flex flex-col gap-y-5 mt-6">
          <Input
            title="Username"
            placeholder="Your unique username"
            value={signUpData.userName}
            onChangeText={(value) => setValueSignUpData("userName", value)}
          />
          <Input
            title="Email"
            placeholder="Your email"
            onChangeText={(value) => setValueSignUpData("email", value)}
            value={signUpData.email}
          />
          <Input
            title="Password"
            placeholder="Your password"
            onChangeText={(value) => setValueSignUpData("password", value)}
            value={signUpData.password}
          />
        </View>
        <Button
          onPress={handleSubmit}
          disabled={isSubmitting}
          className="mt-7 bg-secondary"
        >
          <Text>Sign In</Text>
        </Button>

        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an account?
          </Text>
          <Link
            href="/sign-up"
            className="text-lg font-psemibold text-secondary"
          >
            Login
          </Link>
        </View>
      </View>
    </View>
  );
};

SignUpModule.displayName = "SignUpModule";

export default SignUpModule;
