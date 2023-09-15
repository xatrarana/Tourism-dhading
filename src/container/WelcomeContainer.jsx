import { View, Text } from "react-native";
import React from "react";
import Circle from "../components/common/Circle";
import Button from "../components/common/Button";
import Logo from "../components/Logo";

const WelcomeContainer = () => {
  return (
    <View>
      <View className = "z-10 h-60">
      <Circle translateX={-20} translateY={-120} />
      <Circle translateX={-100} translateY={-240} />
      </View>
      <View className="w-full h-fit gap-y-12  flex items-center justify-center">
        <View className = "flex flex-col items-center justify-center">
        <Logo source = "signInLogo.png" />
          <View className = "flex items-center gap-y-6 mt-4">
            <Text className = "text-xl font-bold">
                NEPAL IN NUTSHELL
            </Text>
            <Text className ="text-center px-8">
                Hetauda is an awesome place for your tourism destination, where alot of things are availble to explore. the place has a unique type of beauty of its own
            </Text>
        </View>
        </View>
       
        <View className="w-full h-fit flex items-center justify-center">
          <Button>Get Started</Button>
        </View>
      </View>
    </View>
  );
};

export default WelcomeContainer;
