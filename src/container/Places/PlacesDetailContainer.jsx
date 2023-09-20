import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import PlaceDetailComponent from "../../components/Places/PlaceDetail/PlaceDetailComponent";
import { FontAwesome } from '@expo/vector-icons'; 

const PlacesDetailContainer = () => {
  return (
    // Upper Section
    <View>
      <View className="h-fit w-full ">
        <View className="w-full h-60">
          <Image
            source={{
              uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/14/19/90/shahid-smarak-hetauda.jpg?w=600&h=400&s=1",
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View className="mx-2">
          <Pressable
            onPress={() => console.log("pressed")}
            className="w-20 h-20 bg-slate-300 rounded-xl"
          ></Pressable>
        </View>
      </View>

      {/* Bottom Section */}
      <View className="flex flex-row items-center justify-between mx-2">
        <View>
          <Text>Location: Banasthali</Text>
          <Text>Ward: 9</Text>
        </View>
        <View className = "flex flex-row items-center justify-center gap-1">
        <FontAwesome name="star" size={24} color="black" />
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
      <View className="mx-2 bg-slate-300">
        <Text>
          Hetauda is a sub-metropolitan city in the Makwanpur District of
          Bagmati Province in central Nepal. It is the administrative
          headquarters of the Makwanpur District and the capital of Bagmati
          Province as declared by a majority of the Provincial Assembly Members
          on 12 January 2020.
        </Text>
      </View>
    </View>
  );
};

export default PlacesDetailContainer;
