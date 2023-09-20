import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Circle from "../components/common/Circle";
import Button from "../components/common/Button";
import Logo from "../components/Logo";
import { useRouter } from "expo-router";
import CircleWrapper from "../components/CircleWrapper";
import KeyboardSpacer from "react-native-keyboard-spacer";
const SignInContainer = () => {
  const router = useRouter();
  return (
    <View className="bg-[#EDF4F3] h-full">
      <View className="z-10  h-36">
        <CircleWrapper />
      </View>
      <View className="w-full h-fit gap-y-6  flex items-center justify-center">
        <View className="flex flex-col items-center justify-center">
          <View className="flex items-center gap-y-6 mb-12">
            <Text className="text-xl font-bold">Welcome Back!</Text>
            <Text className="text-center px-8">Lets travel together</Text>
          </View>
          <Logo source="signin" size={180} />
        </View>
        <View className="gap-y-6 ">
          <TextInput
            className="bg-white w-80 py-3 rounded-xl px-10"
            placeholder="Enter your full Name"
          />
          <TextInput
            className="bg-white w-80 py-3 rounded-xl px-10"
            placeholder="Enter your Password"
          />
        </View>

        <View className="w-full h-fit gap-y-4 flex items-center justify-center">
          <Button handleSubmit={() => router.push("/(home)")}>Login</Button>
          <View className="flex flex-row">
            <Text>Don't have an Account ?</Text>
            <Pressable onPress={() => router.push("/signup")}>
              <Text className="font-semibold text-green-700">sign up</Text>
            </Pressable>
          </View>
        <KeyboardSpacer topSpacing={60}  />

        </View>
      </View>
    </View>
  );
};

export default SignInContainer;
