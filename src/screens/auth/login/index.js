import React, {useEffect, useState} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {GREY, HEIGHT, PRIMARY_COLOR, WIDTH} from "../../../global/theme";
import {
    Gilroy_bold,
    Lexend,
    Lexend_bold,
    Poppins,
    Poppins_black,
    Poppins_bold,
    Poppins_medium
} from "../../../constants/font";
import * as Animatable from "react-native-animatable";
import * as Google from 'expo-google-app-auth';
import {CustomTextInput} from "../../../components/Custom";
import {_errorPrompt} from "../../../utils/core";


const LoginScreen = ({navigation}) => {

    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState(null);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [google, setGoogle] = useState(true);

    useEffect(() => {
        // _constructor();
    }, []);

    const _constructor = () => {
        setTimeout(() => {
            navigation.replace("bottom-tab");
        }, 4000)
    }

    const signInWithGoogleAsync = async () => {
        console.log("GOOGLE AUTH");
        // try {
        //     const result = await Google.logInAsync({
        //         androidClientId: 'AIzaSyBxb__aKzhVJYUhW0VLJYMQn1vQ2BZamsU',
        //         // iosClientId: 'AIzaSyBxb__aKzhVJYUhW0VLJYMQn1vQ2BZamsU',
        //         scopes: ['profile', 'email'],
        //     });
        //
        //     if (result.type === 'success') {
        //         setuserInfo(result.user);
        //     } else {
        //         console.log('Google Sign-In failed.');
        //     }
        //
        //     console.log({result});
        //
        // } catch (e) {
        //     console.error('Error:', e);
        // }

        navigation.replace("bottom-tab");
    };


    const onContinue = () => {
        if(validEmail){
            navigation.replace("bottom-tab");
        } else {
            _errorPrompt("Invalid Input")
        }
    }

  return (
    <ScreenView transparent >
      <View style={styles.container}>
            <View style={{...styles.container}}>
                  <View style={{flexDirection: "column", alignItems: "center", marginTop: HEIGHT * 0.1}}>
                      <Image
                          source={require("../../../../assets/logo.png")}
                          style={{width: 100, height: 100}}
                          resizeMode={"contain"}
                      />
                      <Text style={{fontSize: 20, marginVertical: 10}}>Homely Mobile</Text>
                  </View>

                  <View style={{marginHorizontal: 20, width: "100%", alignItems: "center", justifyContent: "center"}}>

                          <TouchableOpacity
                              style={{
                                  width: "70%",
                                  paddingVertical: 10,
                                  paddingHorizontal: 20,
                                  backgroundColor: "#10B981",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 10,
                                  flexDirection: "row",
                                  marginTop: 50,
                                  borderWidth: 0,
                              }}
                              activeOpacity={0.65}
                              onPress={() => onContinue()}
                          >
                              <Text style={{
                                  fontFamily: Poppins_bold,
                                  fontSize: 14,
                                  color: "#fff",
                                  marginHorizontal: 20
                              }}>Continue With Email</Text>
                          </TouchableOpacity>


                          <>
                              <TouchableOpacity
                                  style={{
                                      width: "70%", paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#fff",
                                      alignItems: "center", justifyContent: "center", borderRadius: 10, flexDirection: "row",
                                      marginTop: 50, borderWidth: 1, borderColor: "#10B981"
                                 }}
                                  activeOpacity={0.65}
                                  onPress={() => signInWithGoogleAsync()}
                              >
                                  <Text style={{fontFamily: Poppins_medium, fontSize: 14, color: "#000", marginHorizontal: 20}}>Sign in with Google</Text>
                                  <Image source={require("../../../../assets/icons/google.png")} style={{width: 16, height: 16}} />

                              </TouchableOpacity>
                          </>

                  </View>

              </View>
      </View>
    </ScreenView>
  );
};


export default LoginScreen;
