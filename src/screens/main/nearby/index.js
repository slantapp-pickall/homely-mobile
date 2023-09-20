import React, {useState, useEffect, useRef} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, ImageBackground, Linking, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Header} from "../../../components/Custom";
import Carousel from "react-native-snap-carousel";
import {HEIGHT, WHITE, WIDTH} from "../../../global/theme";
import {DMSans, Poppins, Poppins_bold, Poppins_medium} from "../../../constants/font";


const NearbyScreen = ({navigation}) => {

    const carouselRef = useRef();

    const data = [
        {
            image: require("../../../../assets/images/view1.jpg"),
            name: "Sheraton Apartment",
            amount: "₦52,000,000"
        },
        {
            image: require("../../../../assets/images/view3.jpg"),
            name: "Sky Apartment",
            amount: "₦32,000,000"
        },
        {
            image: require("../../../../assets/images/view4.jpg"),
            name: "Nicol House",
            amount: "₦24,000,000"
        },
        {
            image: require("../../../../assets/images/view4.jpg"),
            name: "Transcop Hilton",
            amount: "₦112,000,000"
        },
        {
            image: require("../../../../assets/images/view1.jpg"),
            name: "Cyril Apartments",
            amount: "₦8,000,000"
        },
        {
            image: require("../../../../assets/images/view4.jpg"),
            name: "London GoHome",
            amount: "₦32,000,000"
        }
    ];


    const renderItem = ({item, index}) => {
        return (
            <View style={{width: "90%", height: HEIGHT * 0.65, left: WIDTH * 0.26}} key={index}>
                <Image
                    source={item.image}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 30
                    }}
                    resizeMode={"cover"}
                />

                <View
                    style={{
                        position: "absolute", top: 30,
                        alignSelf: "center", left: 30, width: WIDTH * 0.6
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25, color: WHITE,
                            width: WIDTH, lineHeight: 26,
                            fontFamily: DMSans
                        }}
                    >
                        {item.name}
                    </Text>

                    <Text
                        style={{
                            fontSize: 13, color: WHITE,
                            width: WIDTH * 0.2, lineHeight: 26,
                            fontFamily: Poppins_medium, textAlign: "right",
                            right: 0
                        }}
                    >
                        {item.amount}
                    </Text>

                </View>

                <View
                    style={{
                        position: "absolute", bottom: 10, flexDirection: "row",
                        width: WIDTH * 0.6, alignSelf: "center"
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("apartment-info-screen")}
                        style={{
                            backgroundColor: WHITE, borderRadius: 40, paddingVertical: 20,
                            paddingHorizontal: 30,
                        }}
                        activeOpacity={0.65}
                    >
                        <Text style={{fontFamily: Poppins_bold, fontSize: 13}}>Take a look</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: WHITE, borderRadius: 40, padding: 20,
                            marginLeft: 40
                        }}
                        activeOpacity={0.65}
                        onPress={()=>{
                            //Here we go
                            Linking.openURL("https://www.google.com/maps/dir/Wuse+2,+Abuja/Maitama,+Abuja,+Federal+Capital+Territory/@9.0816271,7.4770467,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x104e0a5637e8c4e5:0x99ee4ca23378005!2m2!1d7.4701862!2d9.078749!1m5!1m1!1s0x104e0a42a5e3f47d:0xa5b2f06d94fb9ecb!2m2!1d7.4933824!2d9.0881961!3e0?entry=ttu").then(r => null)
                        }}
                    >
                        <Image source={require("../../../../assets/icons/pin.png")} style={{width: 18, height: 18}} />
                    </TouchableOpacity>

                </View>

            </View>
        )
    }

  return (
    <ScreenView>
      <View style={styles.container}>
          <Header navigation={navigation} title={'Find \nThe Perfect House'} style={{padding: 25}} />

          <Carousel
              ref={carouselRef}
              data={data}
              renderItem={renderItem}
              sliderWidth={WIDTH}
              itemWidth={WIDTH}
              layout={"stack"}
              contentContainerCustomStyle={{position: "absolute", marginTop: 20}}
              firstItem={2}
          />
      </View>
    </ScreenView>
  );
};


export default NearbyScreen;
