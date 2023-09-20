import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {CustomTab} from "../../components/Custom";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {ProfileScreen, RecommendScreen, NearbyScreen} from "../../screens/main";
import {TabData} from "../../constants";

const Tab = createBottomTabNavigator();
const {Navigator, Screen} = Tab;

const BottomTab = (props) => {
    return (
        <Navigator
            screenOptions={{headerShown: false}}
            tabBar={props => <CustomTab {...props} key={props.key} />}
            initialRouteName={"HomeTab"}
        >
            <Tab.Screen
                name="NearbyTab"
                component={NearbyScreen}
                options={{
                    tabBarLabel: 'Nearby',
                }}
            />

            <Tab.Screen
                name="RecommendTab"
                component={RecommendScreen}
                options={{
                    tabBarLabel: 'Recommend',
                }}
            />

            <Tab.Screen
                name="ProfileTab"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                }}
            />
        </Navigator>
    );
}

export default BottomTab;
