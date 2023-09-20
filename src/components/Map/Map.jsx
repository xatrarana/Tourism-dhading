import { View, Text } from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
const Map = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 27.4369463,
    longitude: 85.00255390 ,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <>
      <MapView
        showsMyLocationButton={true}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        style={{ height: "100%", width: "100%" }}
      >
        <Marker coordinate={initialRegion} ></Marker>
      </MapView>
    </>
  );
};

export default Map;
