import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { IBaseComponent } from "@/components/interfaces";
import { Dimensions, Image, View, Text } from "react-native";
import { Button } from "@/shadcn-ui/ui";
import images from "@/constants/images";
import Input from "@/components/input";
import { Link, useRouter } from "expo-router";
import { ISignInDto } from "@/common/interfaces/uers.interfaces";
import { signIn } from "@/lib/appwrite/auth.appwrite";

interface ISignInModuleProps extends IBaseComponent {}

const SignInModule: FC<ISignInModuleProps> = ({ className }) => {
  const router = useRouter();

  const [signInData, setSignInData] = useState<ISignInDto>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setValueSignInData = <K extends keyof ISignInDto>(
    key: K,
    value: ISignInDto[K]
  ) => {
    setSignInData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    router.push("/sign-in");
    // try {
    //   if (!signInData.email || !signInData.password) console.log("loi");
    //   setIsSubmitting(true);
    //   await signIn(signInData.email, signInData.password);
    //   router.replace("/home");
    // } catch (error) {
    //   console.log("🚀 ~ handleSubmit ~ error:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <View
      className={cn(className, "w-full flex justify-center h-full px-4 my-6")}
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
          title="Email"
          placeholder="Your email"
          value={signInData.email}
          onChangeText={(value) => setValueSignInData("email", value)}
        />
        <Input
          title="Password"
          placeholder="Your password"
          onChangeText={(value) => setValueSignInData("password", value)}
        />
      </View>
      <Button
        onPress={handleSubmit}
        className="mt-7 bg-secondary"
        disabled={isSubmitting}
      >
        <Text> Log In</Text>
      </Button>

      <View className="flex justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-gray-100 font-pregular">
          Don't have an account?
        </Text>
        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">
          Signup
        </Link>
      </View>
    </View>
  );
};

SignInModule.displayName = "SignInModule";

export default SignInModule;
