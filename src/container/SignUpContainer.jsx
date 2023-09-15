import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Circle from "../components/common/Circle";
import Button from "../components/common/Button";
import Logo from "../components/Logo";

const SignUpContainer = () => {
  return (
    <View className="bg-[#EDF4F3] h-full">
      <View className="  z-10 h-36">
        <Circle translateX={-20} translateY={-120} />
        <Circle translateX={-100} translateY={-240} />
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
      </View>
      <View className="w-full h-fit  gap-y-4 flex items-center justify-center">
        <Button>Register</Button>
        <View className = "flex flex-row">
            <Text>
                Already have an Account ? 
            </Text>
            <Pressable>
                <Text className = "font-semibold text-green-700">
                    sigin in
                </Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpContainer;
