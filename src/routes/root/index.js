import React, {useContext, useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavOptions, ScreenOptions} from "../../utils";
import {LoginScreen, SignupScreen, SplashScreen} from "../../screens/auth";
import BottomTab from "../bottomTab";
import {ApartmentInfo, ApartmentView, SearchScreen, Payments} from "../../screens/main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserContext} from "../../contexts";
// import {
//     ChildrenProfileScreen,
//     NotificationScreen,
//     NotProfileScreen,
//     UserProfileScreen,
//     ViewChildProfile
// } from "../../screens/main";


const Stack = createStackNavigator();

const {Navigator, Screen} = Stack;

const RootNav = () => {

    // useEffect(() => {
    //     _constructor();
    // }, []);

    // const [tokenx, setTokenx] = useState(null);
    const [user, setUser] = useContext(UserContext);


    const _constructor = async () => {
        const token = await AsyncStorage.getItem("$token_key");
        console.log({token})
        setTokenx(token);
    }

    return (
    <NavigationContainer>
      <Navigator screenOptions={NavOptions} initialRouteName={"splash-screen"}>
          <Screen name={"splash-screen"} component={SplashScreen} options={ScreenOptions}/>
                  <>
                      <Screen name={"login-screen"} component={LoginScreen} options={ScreenOptions}/>
                      <Screen name={"signup-screen"} component={SignupScreen} options={ScreenOptions}/>
                  </>
                  <>
                      <Screen name={"bottom-tab"} component={BottomTab} options={ScreenOptions}/>
                      <Screen name={"apartment-view-screen"} component={ApartmentView} options={ScreenOptions}/>
                      <Screen name={"apartment-info-screen"} component={ApartmentInfo} options={ScreenOptions}/>
                      <Screen name={"search-screen"} component={SearchScreen} options={ScreenOptions}/>
                      <Screen name={"payment-screen"} component={Payments} options={ScreenOptions}/>
                  </>
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
