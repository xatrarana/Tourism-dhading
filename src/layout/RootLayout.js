import React from "react";
import { Stack } from "expo-router";
import DataProvider from "../context/DataProvider";
// import { RootSiblingParent } from "react-native-root-siblings";
const RootLayout = () => {
  return (
    <>
      <DataProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(onboard)/onboard"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/signin"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/signup"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
              headerTitle: "Home",
            }}
          />
          <Stack.Screen
            name="(settings)/settings"
            options={{
              // headerShown: false,
              headerTitle: "Settings",
            }}
          />
          {/* <Stack.Screen
            name="(places)/details"
            options={{
              headerShown: true,
              headerTitle: "Places",
            }}
          /> */}
        </Stack>
      </DataProvider>
    </>
  );
};

export default RootLayout;
