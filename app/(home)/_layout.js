import React from "react";
import { Stack } from "expo-router";
import UserProfile from "../../src/components/common/UserProfile";
import ShortHeader from "../../src/components/common/ShortHeader";
// import { RootSiblingParent } from "react-native-root-siblings";
const HomeLayout = () => {
  return (
    <>
              <Stack>
                <Stack.Screen
                  name="index"
                  options={{
                    headerShown: true,
                    headerTitle: "Home",
                    headerBackVisible: false,
                    headerTransparent: false,
                    headerShadowVisible: false,
                    header: () => (
                      <ShortHeader/>
                    ), 
                    headerRight: () => (
                      <UserProfile/>
                    ),

                
                  }}
                />
        
                <Stack.Screen
                  name="likes"
                  options={{
                    headerShown: true,
                    headerTitle: "Saved",
                  }}
                />
        
                <Stack.Screen
                  name="settings"
                  options={{
                    headerShown: true,
                    headerTitle: "Settings",
                  }}
                />
        

              </Stack>
    </>
  );
};

export default HomeLayout;
