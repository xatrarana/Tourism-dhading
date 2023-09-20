import { Tabs, useRouter, usePathname } from "expo-router";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

import Colors from "../../src/constants/theme";
import ShortHeader from "../../src/components/common/ShortHeader";
export default () => {
    const router = usePathname();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "black",
        header: ShortHeader,
        tabBarStyle: {
          height: 70,
          paddingVertical: 10,
          display: usePathname() === '/location' ? 'none' : 'flex',
          
          
        },
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 4, // Adjust the font size to your preferred size
          
        },
        tabBarActiveBackgroundColor: Colors.primary,
        tabBarActiveTintColor: "white",
        tabBarAllowFontScaling: true,
        tabBarItemStyle: {
            borderRadius: 16,
            paddingTop: 4,
            width: 10,
            height: 52,
            marginBottom: 10,
            
        }

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          // headerTitle: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          // title: "Home",
          // headerTitle: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="map-pin" size={24} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="wishlist"
        options={{
          // title: "Home",
          // headerTitle: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="thingstodo"
        options={{
          // title: "Home",
          // headerTitle: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="work-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
