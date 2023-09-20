import {
  View,
  Text,
  TextInput,
  useColorScheme,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";

import React from "react";
import HomeComponent from "../../components/HomeComponent";
import CircleWrapper from "../../components/CircleWrapper";
import Menu from "../../components/nav/Menu";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import UserProfile from "../../components/common/UserProfile";

const HomeContainer = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <SafeAreaView style= {{flex:1}}> 
    <ScrollView className="h-full w-full mb-[54px]">
      <StatusBar
        style={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      

      <View className=" relative  z-10 h-80 bg-[#3A7567] mb-4">
      <UserProfile />
        <Image
          source={{
            uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRvGskbsnyvPwHk2wPeX1wuwdDe4V-NQRk_5hUTrqjT2elgkKlvPETLtAZjsxlnJ7-gCStdTvUkG_NsSnzBFPaiy4-RSYdr",
          }}
          style={{ width: "100%", height: "100%", opacity: 0.7 }}
        />
        <View className="absolute bottom-1/3 left-12 right-8">
          <Text className="text-white  font-bold text-2xl">
            Welcome To Hetauda
          </Text>
        </View>
        <View className="bg-transparent absolute w-full bottom-2 opa">
          <View className="p-2 relative">
            <View className="absolute left-6 z-10 top-[40%] ">
              <MaterialIcons name="search" size={30} color="#999" />
            </View>
            <TextInput
              className="py-4 bg-white mx-1 pl-12  rounded-lg"
              placeholder="Search Destination "
            />
          </View>
        </View>
      </View>
          
      <HomeComponent />
    </ScrollView>
    <Menu />

    </SafeAreaView>
  );
};

export default HomeContainer;
