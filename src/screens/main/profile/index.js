import React, {useState, useEffect} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Header} from "../../../components/Custom";
import {GREY, GREY1, WIDTH} from "../../../global/theme";
import {DMSans, DMSans_bold} from "../../../constants/font";
import {profileData} from "../../../constants";



const ProfileScreen = ({navigation}) => {


  return (
    <ScreenView>
        <View style={styles.container}>
            {/*<Header navigation={navigation} title={"Profile"} />*/}
            <View style={styles.view1}>
                <View style={{width: WIDTH * 0.25, height: WIDTH * 0.25, borderRadius:100, backgroundColor: GREY1 }}>

                </View>

                <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                    <Text style={{fontFamily: DMSans_bold, marginRight: 5 }}>Toreto</Text>
                    <Image source={require("../../../../assets/icons/verified.png")} style={{width: 18, height: 18}} />
                </View>
                <Text style={{fontFamily: DMSans, marginTop: 5, color:"#919193", fontSize: 12 }}>Semarang, Indonesia</Text>
                <View style={styles.view11}>
                    {
                        profileData.map((item, index) => (
                            <TouchableOpacity style={styles.rowViewS}

                            >
                                <View style={styles.rowView}>
                                    <Image
                                        source={item.icon}
                                        style={{width: 16, height: 16, marginRight: 20}}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={{fontFamily: "Poppins", fontSize: 13, marginTop: 3}}>{item.name}</Text>
                                </View>
                                <Image source={require("../../../../assets/icons/arrow-down.png")} style={{width: 13, height: 13}} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        </View>
    </ScreenView>
  );
};


export default ProfileScreen;
