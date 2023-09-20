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
          <ScrollView>
            <View style={styles.container}>
                  <View style={{flexDirection: "row", alignItems: "center", marginTop: HEIGHT * 0.1}}>
                      <Image
                          source={require("../../../../assets/icons/login.png")}
                          style={{width: WIDTH * 0.85, height: WIDTH * 0.9}}
                          resizeMode={"contain"}
                      />
                  </View>
                  <CustomTextInput
                      value={email}
                      setValue={(val) => {
                          setEmail(val);
                          setGoogle(false);
                      }}
                      valid={validEmail}
                      setCheck={setValidEmail}
                      placeholder={"e.g pindroo@gmail.com"}
                      title={"Email address"}
                      style={{width: "100%", marginTop: 5, alignSelf: "center", alignItems: "center"}}
                      containerStyle={{ marginBottom: 0, alignSelf: "center", marginHorizontal: 50}}
                  />
                  <View style={{marginHorizontal: 20, width: "100%", alignItems: "center", justifyContent: "center"}}>

                      {!google &&
                          <TouchableOpacity
                              style={{
                                  width: "90%",
                                  paddingVertical: 10,
                                  paddingHorizontal: 20,
                                  backgroundColor: "#10B981",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: 10,
                                  flexDirection: "row",
                                  marginTop: 50,
                                  borderWidth: 1,
                              }}
                              activeOpacity={0.65}
                              onPress={() => onContinue()}
                          >
                              <Text style={{
                                  fontFamily: Poppins_bold,
                                  fontSize: 14,
                                  color: "#fff",
                                  marginHorizontal: 20
                              }}>Continue</Text>
                          </TouchableOpacity>
                      }

                      {google &&

                          <>
                              <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                                  <View style={{height: 2, backgroundColor: "#000", width: "45%"}}/>
                                  <Text
                                      style={{fontFamily: Lexend, fontSize: 13, color: "#000", fontWeight: "700"}}>OR</Text>
                                  <View style={{height: 2, backgroundColor: "#000", width: "45%"}}/>
                              </View>


                              <TouchableOpacity
                                  style={{
                                      width: "90%", paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#fff",
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
                      }

                  </View>

              </View>
          </ScrollView>
      </View>
    </ScreenView>
  );
};


export default LoginScreen;
