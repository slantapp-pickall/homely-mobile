import React, {useContext, useEffect} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, Text, View} from "react-native";
import {GREY, PRIMARY_COLOR, WIDTH} from "../../../global/theme";
import {Gilroy_bold, Lexend, Lexend_bold, Poppins_black} from "../../../constants/font";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserContext} from "../../../contexts";
import Toast from 'react-native-toast-message'
import {Wave} from "react-native-animated-spinkit";



const SplashScreen = ({navigation}) => {

    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        _constructor();
    }, []);


    const _constructor = async () => {
        const token = await AsyncStorage.getItem("$token_key");
        setUser(prev => prev = {...prev, token: token});

        console.log({token});

        setTimeout(() => {
            if(token != null){
                // navigation.replace("bottom-tab");
            } else {
                navigation.replace("login-screen");
            }
        }, 3000);
    }

  return (
    <ScreenView transparent >
      <View style={styles.container}>

          <View style={{flexDirection: "row", alignItems: "center"}}>
              <Animatable.Image
                  animation={"jello"}
                  duration={2200}
                  source={require("../../../../assets/logo.png")}
                  style={{width: WIDTH * 0.2, height: WIDTH * 0.2}}
                  resizeMode={"contain"}
              />

              <View style={{marginHorizontal: 20}}>
                  <Text style={{fontFamily: Lexend, fontSize: 30, color: "#000", fontWeight: "800"}}>Homely</Text>
                  <Text style={{fontFamily: Lexend, fontSize: 12, color: "#000", fontWeight: "600"}}>Get the best.</Text>
              </View>
          </View>

          <View style={{position: "absolute", bottom: 10, alignItems: "center"}}>
              <Wave color={PRIMARY_COLOR} size={30} style={{marginVertical: 20}} />
              <Text style={{fontFamily: Lexend, fontSize: 12, color: GREY}}>SlantApp Team...</Text>
          </View>
      </View>
    </ScreenView>
  );
};


export default SplashScreen;
