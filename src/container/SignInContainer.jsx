import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Circle from "../components/common/Circle";
import Button from "../components/common/Button";
import Logo from "../components/Logo";

const SignInContainer = () => {
  return (
    <View className="bg-[#EDF4F3] h-full">
      <View className="z-10  h-36">
        <Circle translateX={-20} translateY={-120} />
        <Circle translateX={-100} translateY={-240} />
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
          <Button>Login</Button>
          <View className = "flex flex-row">
            <Text>
                Don't have an Account ? 
            </Text>
            <Pressable>
                <Text className = "font-semibold text-green-700">
                    sigin up
                </Text>
            </Pressable>
        </View>
        </View>
      </View>
    </View>
  );
};

export default SignInContainer;
