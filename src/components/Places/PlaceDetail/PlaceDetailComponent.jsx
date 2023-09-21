import { View, Text,StyleSheet } from "react-native";
import React from "react";
import { Feather,FontAwesome,AntDesign } from "@expo/vector-icons";


const PlaceDetailStarRating = () => {
    return (
      <View>
        <Text>PlaceDetailComponent</Text>
      </View>
    )
  }
//   export  PlaceDetailComponent;
const PlaceDetailComponent = () => {
  return (
    <>
      <View className = "flex flex-row items-center justify-between h-fit py-4">
        {/* Section 1 */}
        <View style= {styles.container}>
          <Feather name="map" size={24} color="black" />
          <View>
            <Text>Map</Text>
            <Text>GO</Text>
          </View>
        </View>
        {/* Section 2 */}
        <View style= {styles.container}>
        <FontAwesome name="star" size={24} color="#FF5733" />
          <View>
            <Text>Rating</Text>
            <Text>Rate The Place</Text>
          </View>
        </View>
        {/* Section 3 */}
        <View style= {styles.container}>
        <AntDesign name="playcircleo" size={24} color="black" />
          <View>
            <Text>Audio</Text>
            <Text>Play</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PlaceDetailComponent;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
      },

})








