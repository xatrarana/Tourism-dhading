import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Circle from "../../components/common/Circle";
import Button from "../../components/common/Button";
import Logo from "../../components/Logo";
import { useRouter } from "expo-router";
import CircleWrapper from "../../components/CircleWrapper";
import KeyboardSpacer from "react-native-keyboard-spacer";
const SignUpContainer = () => {
  const router = useRouter();
  return (
    <View className="bg-[#EDF4F3] h-full">
      <View className="  z-10 h-36">
        <CircleWrapper/>
      </View>
      <View className="w-full h-fit  pb-16 gap-y-6  flex items-center justify-center">
        <View className="flex items-center gap-y-4 ">
          <Text className="text-2xl font-bold">Welcome Onboard</Text>
          <Text className="text-center px-8">Lets travel together</Text>
        </View>
        <View className="gap-y-6 ">
          <TextInput
            className="bg-white w-80 py-3 rounded-xl px-10"
            placeholder="Enter your full Name"
          />
          <TextInput
            className="bg-white w-80 py-3 rounded-xl px-10"
            placeholder="Enter your Email Address"
          />
          <TextInput
            className="bg-white w-80 py-3 rounded-xl px-10"
            placeholder="Enter your Password"
          />
          <TextInput
            className="bg-white w-80 py-3 rounded-xl px-10"
            placeholder="Confirm Password"
          />
        </View>
        <KeyboardSpacer topSpacing={60}  />
      </View>
      <View className="w-full h-fit  gap-y-4 flex items-center justify-center">
        <Button>Register</Button>
        <View className="flex flex-row">
          <Text>Already have an Account ?</Text>
          <Pressable onPress={()=>router.push("/signin")}>
            <Text className="font-semibold text-green-700">sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpContainer;
