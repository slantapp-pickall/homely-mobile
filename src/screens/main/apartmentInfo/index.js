import React, {useState, useEffect} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Header} from "../../../components/Custom";
import {HEIGHT, WHITE, WIDTH} from "../../../global/theme";
import {DMSans, DMSans_medium, Poppins_bold, Poppins_medium} from "../../../constants/font";



const ApartmentInfo = ({navigation}) => {

    const InfoData = [
        "2 Bedrooms",
        "1 Kitchen",
        "1 Living room",
        "1 Bathroom",
        "2 Balcony"
    ]

  return (
    <ScreenView transparent>
      <ImageBackground source={require("../../../../assets/images/view1.jpg")} style={styles.container}>
          <Header navigation={navigation} />
          <View
              style={{
                  position: "absolute", bottom: 0, backgroundColor: 'rgba(40, 52, 52, 0.8)',
                  width: WIDTH, height: HEIGHT * 0.5, borderTopLeftRadius: 35, borderTopRightRadius: 35,
              }}
          >
              <Image
                  source={require("../../../../assets/icons/curve.png")}
                  style={{
                      width: 25, height: 25,  right: 12, position: "absolute", top: 12
                  }}
              />

              <View style={styles.view1}>
                <View style={styles.rowView}>
                    <Image source={require("../../../../assets/icons/home.png")} style={{width: 18, height: 18}} />
                    <Text style={{color: "white", marginLeft: 10, fontSize: 12, fontFamily: DMSans}}>Hospitali Services</Text>
                </View>

                  <View style={styles.rowViewS}>
                      <Text
                          style={{
                              color: "white", marginLeft: 10, fontSize: 20,
                              width: WIDTH * 0.26, lineHeight: 30, fontFamily: DMSans_medium
                          }}>
                          {"Sky\nApartment"}
                      </Text>

                      <Text
                          style={{
                              color: "white", marginLeft: 10, fontWeight: "500", fontSize: 17,
                              lineHeight: 30
                          }}>
                          ₦1200
                          <Text style={{
                              fontSize: 11
                          }}>
                              Month
                          </Text>
                      </Text>
                  </View>
                  <Text style={{color: "white", marginLeft: 10, fontFamily: Poppins_bold, fontSize: 12, marginVertical: 15}}>Saltlake, Kolkata</Text>

                  <View style={[styles.rowViewS, {marginTop: 10, width: "100%", justifyContent: "space-between"}]}>
                    <View style={{paddingHorizontal:10}}>
                        {
                            InfoData.map((item, index) => (
                                <Text style={{color: "white", fontSize: 11, fontFamily: Poppins_medium}} key={index}>{item},</Text>
                            ))
                        }
                    </View>
                      <View style={styles.rowViewN}>
                          <TouchableOpacity style={styles.btn}>
                            <Image source={require("../../../../assets/icons/outline_car.png")} style={{width: 16, height: 16, padding: 10}} resizeMode={"contain"} />
                              <View
                                  style={{
                                      position: "absolute", top: 0, right: 0, width: 17, height: 17,
                                      borderRadius: 40, backgroundColor: WHITE, alignItems: "center", justifyContent: "center"
                                    }}
                                  >
                                  <Text style={{color: "#000", fontSize: 12, fontWeight: "800"}}>+</Text>
                              </View>
                          </TouchableOpacity>

                          <TouchableOpacity style={styles.btn}>
                              <Image source={require("../../../../assets/icons/gym.png")} style={{width: 16, height: 16, padding: 10}} resizeMode={"contain"} />
                              <View
                                  style={{
                                      position: "absolute", top: 0, right: 0, width: 17, height: 17,
                                      borderRadius: 40, backgroundColor: WHITE, alignItems: "center", justifyContent: "center"
                                  }}
                              >
                                  <Text style={{color: "#000", fontSize: 12, fontWeight: "800"}}>+</Text>
                              </View>
                          </TouchableOpacity>
                      </View>
                  </View>

                  <View style={[styles.rowView, {justifyContent: "space-evenly", marginTop: 20}]}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("apartment-view-screen")}
                        activeOpacity={0.6}
                        style={{
                            alignItems: "center", justifyContent: "center",
                            borderRadius: 30, backgroundColor: "#fff", width: "40%", padding: 20
                        }}
                    >
                        <Text style={{color: "#000", fontSize: 13, fontFamily: Poppins_medium}}>View</Text>
                    </TouchableOpacity>
                      <TouchableOpacity
                          onPress={() => navigation.navigate("payment-screen")}
                          activeOpacity={0.6}
                          style={{
                              alignItems: "center", justifyContent: "center",
                              borderRadius: 30, backgroundColor: "#fff", width: "40%", padding: 20
                          }}
                      >
                          <Text style={{color: "#000", fontSize: 13, fontFamily: Poppins_medium}}>Book Now</Text>
                      </TouchableOpacity>
                  </View>
              </View>

          </View>
      </ImageBackground>
    </ScreenView>
  );
};


export default ApartmentInfo;
