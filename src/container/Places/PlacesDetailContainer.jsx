import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useState } from "react";
import PlaceDetailComponent from "../../components/Places/PlaceDetail/PlaceDetailComponent";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import {Colors} from '../../constants/theme'
const PlacesDetailContainer = () => {
  const { title, url } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  console.log(title);
  const handleClick = () => {
    console.log("clicked");
    setModalVisible(true);
  };
  return (
    // Upper Section
    <View>
      <View className="h-fit w-full ">
        <View className="w-full h-60">
          <ImageBackground
            className="relative"
            source={{
              uri: url,
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <View className="absolute bottom-0 w-[80%]">
              <Text className="text-white text-xl ">{title.slice(0, 20)}</Text>
            </View>
            <Pressable
              onPress={handleClick}
              className="w-10 h-10 rounded-full bg-slate-600 opacity-80 absolute bottom-2 right-2 flex items-center justify-center"
            >
              <AntDesign name="arrowsalt" size={24} color="white" />
            </Pressable>
          </ImageBackground>
        </View>

        {/* Carousel Thumbnails */}
        <View className="m-2">
          <TouchableOpacity
            onPress={() => console.log("pressed")}
            className="w-16 h-16 bg-slate-300 rounded-xl"
          ></TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View className="flex flex-row items-center justify-between mx-2">
        <View>
          <Text style= {styles.header}>Location: Banasthali</Text>
          <Text>Ward: 9</Text>
        </View>
        <View className="flex flex-row items-center justify-center gap-1">
          <FontAwesome name="star" size={24} color="#FF5733" />
          <View>
            <Text>Rating</Text>
            <Text>3.5k</Text>
          </View>
        </View>
      </View>

      {/* Map and Rating and audio */}
      <View className="mx-2">
        <PlaceDetailComponent />
      </View>
      {/* Description */}
      <View className="mx-2 bg-slate-100">
        <Text className = "text-justify">
          Hetauda is a sub-metropolitan city in the Makwanpur District of
          Bagmati Province in central Nepal. It is the administrative
          headquarters of the Makwanpur District and the capital of Bagmati
          Province as declared by a majority of the Provincial Assembly Members
          on 12 January 2020.
          <TouchableOpacity onPress={()=>console.log("pressed")}>
           <Text className = "text-green-600"> Read More</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        hardwareBackButton={true}
        supportedOrientations={["portrait", "landscape"]}
        presentationStyle="fullScreen"
      >
        <View className="bg-black relative h-full">
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="w-10 h-10 z-10 bg-white absolute top-6 right-4 flex items-center justify-center  rounded-full"
          >
            <Entypo name="cross" size={32} color="black" />
          </TouchableOpacity>
          <Image
            source={{ uri: url }}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default PlacesDetailContainer;


const styles = StyleSheet.create({
  header:{
    fontSize: 20,
    fontWeight: 'bold',
    color:"black"
  }
})
