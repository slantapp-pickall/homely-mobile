import React, {useEffect} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, Text, View} from "react-native";
import {GREY, PRIMARY_COLOR, WIDTH} from "../../../global/theme";
import {Gilroy_bold, Lexend, Lexend_bold, Poppins_black} from "../../../constants/font";
import * as Animatable from "react-native-animatable";



const SignupScreen = ({navigation}) => {

    useEffect(() => {
        _constructor();
    }, []);

    const _constructor = () => {
        setTimeout(() => {
            // navigation.replace("bottom-tab");
        }, 3000)
    }

  return (
    <ScreenView transparent >
      <View style={styles.container}>
          <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>

              {

              }
              {/*<Animatable.Image*/}
              {/*    animation={"jello"}*/}
              {/*    duration={2200}*/}
              {/*    source={require("../../../../assets/logo.png")}*/}
              {/*    style={{width: WIDTH * 0.2, height: WIDTH * 0.2}}*/}
              {/*    resizeMode={"contain"}*/}
              {/*/>*/}
          </View>

      </View>
    </ScreenView>
  );
};


export default SignupScreen;
