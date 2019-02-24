import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/Screens/HomeScreen";
import MessagesScreen from "./src/Screens/MessageScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import SettingScreen from "./src/Screens/SettingScreen";

const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Messages: {
        screen: MessagesScreen
    },
    Profile: {
        screen: ProfileScreen
    },
    Settings: {
        screen: SettingScreen
    }
}, {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#f2f2f2',
        activeBackgroundColor: '#2EC4B6',
        inactiveTintColor: `#666`,
        labelStyle: {
            fontSize: 20,
            padding: 5
        }
    }
});

export default createAppContainer(Tab);