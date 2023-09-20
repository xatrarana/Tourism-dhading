import {
  AnimatedTabBarNavigator,
  DotSize, // optional
  TabElementDisplayOptions, // optional
  TabButtonLayout, // optional
  IAppearanceOptions, // optional
} from "react-native-animated-nav-tab-bar";
import HomeScreen from "../../screens/Home/HomeScreen";
import Location from "../../screens/Home/Location";
import Saved from "../../screens/Home/Saved";
import ThingsToDo from "../../screens/Home/ThingsToDo";
import Icon from "react-native-vector-icons/FontAwesome";

const Tabs = AnimatedTabBarNavigator();

export default function BottomNavBar() {
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: "#2F7C6E",
      inactiveTintColor: "#222222",
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        // tabBarIcon: ({ focused, color, size }) => (
        //   <Icon
        //     name="home"
        //     size={size ? size : 24}
        //     color={focused ? color : "#222222"}
        //     focused={focused}
        //   />
        // ),
        tabBarLabel: "Home",
      }}
    />
    <Tabs.Screen
      options={{
        tabBarLabel: "Map",
      }}
      name="Map"
      component={Location}
    />
    <Tabs.Screen tabBarLabel="Wishlist" name="Wishlist" component={Saved} />
    <Tabs.Screen
      options={{ tabBarLabel: "Things to do" }}
      name="Things to do"
      component={ThingsToDo}
    />
  </Tabs.Navigator>;
}
