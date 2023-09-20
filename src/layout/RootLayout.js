import React from "react";
import { Stack } from "expo-router";
// import { RootSiblingParent } from "react-native-root-siblings";
const RootLayout = () => {
  return (
    <>
              <Stack>
                <Stack.Screen
                  name="index"
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
                  name="(auth)/onboard"
                  options={{
                    headerShown: false,
                  }}
                />
                   <Stack.Screen
                  name="(home)"
                  options={{
                    headerShown: false,
                  }}
                />
                

            
            
                {/* <Stack.Screen
                  name="(auth)/phone"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="(auth)/otp"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="(auth)/forgot"
                  options={{
                    headerShown: true,
                    headerTitle: "",
                  }}
                />
              
                <Stack.Screen
                  name="(auth)/password-reset"
                  options={{
                    headerShown: false,
                  }}
                />

                <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false,
                  }}
                />

                <Stack.Screen
                  name="(user)/profile"
                  options={{
                    headerShown: true,
                  }}
                />

                <Stack.Screen
                  name="(places)/detail"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="(setting)/help"
                  options={{
                    headerTitle: "Support",
                  }}
                />
                <Stack.Screen
                  name="(setting)/about"
                  options={{
                    headerTitle: "About",
                  }}
                />
                <Stack.Screen
                  name="(places)/packages"
                  options={{
                    headerTitle: "Packages",
                  }}
                />
                <Stack.Screen
                  name="(places)/package_detail"
                  options={{
                    headerTitle: "Package_detail",
                  }}
                />
                <Stack.Screen
                  name="(places)/all_other_places_list"
                  options={{
                    headerTitle: "Places",
                  }}
                />
                <Stack.Screen
                  name="(places)/all_popular_places_list"
                  options={{
                    headerTitle: "Places",
                    headerShadowVisible: false,
                  }}
                />
                <Stack.Screen
                  name="(transport)/transport"
                  options={{
                    headerTitle: "Routes",
                  }}
                />
                   <Stack.Screen
                  name="(places)/nearby_places"
                  options={{
                    headerTitle: "Nearby Places",
                  }}
                /> */}
              </Stack>
    </>
  );
};

export default RootLayout;
