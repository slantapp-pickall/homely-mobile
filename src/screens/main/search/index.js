import React, {useState, useEffect, useCallback, useMemo, useRef} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Header} from "../../../components/search";
import {PRIMARY_COLOR, WHITE, WIDTH} from "../../../global/theme";
import {apartmenViewData, faciliatiesData} from "../../../constants";
import MapView from 'react-native-maps';
import {BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import BlurBG from "../../../components/modal/blurbg";



const SearchScreen = ({navigation}) => {

    const [map, setMap] = useState(false);
    const [buyCat, setBuyCat] = useState(false);
    const [rate, setRate] = useState();
    const [fac, setFac] = useState("");

    const [lowLevel, setLowLevel] = useState(["25%", "50%"]);

    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => lowLevel, [lowLevel]);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    const closeModal = () => {
        bottomSheetModalRef.current?.close();
    }

    const ratingData = [
        {
            name: "1",
        },
        {
            name: "2",
        },
        {
            name: "3",
        },
        {
            name: "4",
        },
        {
            name: "5",
        }
    ];

    const RenderItem = ({item, index}) => {
        return(
            <TouchableOpacity
                activeOpacity={0.65}
                style={styles.itemContainer}
                onPress={() => handlePresentModalPress()}
            >
                <Image
                    source={require("../../../../assets/images/view2.png")}
                    style={{width: "100%", height: "55%", borderRadius: 15, marginBottom: 10}}
                />

                <View style={styles.itemView1}>
                    <Text
                        style={{
                            color: "#000", marginTop: 15, fontSize: 12,
                            width: "60%", textAlign: "left"
                        }}
                    >
                        Apartement merdeka
                    </Text>

                    <Text
                        style={{
                            color: "#000", marginVertical: 8, fontSize: 14,
                            fontWeight: "700"
                        }}
                    >
                        N2,500,000
                    </Text>

                    <View style={[styles.rowView, {marginHorizontal: 5}]}>
                        <Text style={styles.text2}>4.5</Text>
                        <Image
                            source={require("../../../../assets/icons/Star.png")}
                            style={{width: 12, height: 12, marginHorizontal: 8}}
                        />
                        <Text style={styles.text2}>| per month </Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

  return (
      <BottomSheetModalProvider>
        <ScreenView bgColor={"#fcfcfc"}>
            <View style={styles.container}>
                <Header navigation={navigation} title={"Search"} style={{paddingHorizontal: 25}} />
                <View style={styles.view1}>
                    <View style={styles.view11}>
                        {/*input and filter*/}
                        <View style={styles.rowView}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        backgroundColor: WHITE, borderRadius: 10, paddingVertical: 10,
                                        paddingHorizontal: 15, fontSize: 12, width: "100%"
                                    }}
                                    placeholder={"Search place, home ..."}
                                />

                                <TouchableOpacity
                                    style={{
                                        position: "absolute",
                                        right: 20,
                                    }}
                                >
                                    <Image
                                        source={require("../../../../assets/icons/search.png")}
                                        resizeMode={"contain"}
                                        style={{
                                            width: 16, height: 16,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={styles.btn}
                            >
                                <Image
                                    source={require("../../../../assets/icons/filter.png")}
                                    style={{width: 18, height: 18}}
                                />

                            </TouchableOpacity>
                        </View>

                        <View style={styles.rowViewS}>
                            <Text style={styles.text1}>
                                Search results for:
                                <Text style={{color: PRIMARY_COLOR, fontWeight: "700"}}> DI Yogyakarta</Text>
                            </Text>

                            <TouchableOpacity
                                activeOpacity={0.65}
                                onPress={() => setMap(prev => prev = !prev)}
                            >
                                {
                                    map ?
                                        <Image source={require("../../../../assets/icons/map.png")} style={styles.icon} />
                                        :
                                        <Image source={require("../../../../assets/icons/menu.png")} style={styles.icon} />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.view12}>
                        {
                            map ?
                                <MapView style={styles.map} mapType={"terrain"} />
                                :
                                <FlatList
                                    data={apartmenViewData}
                                    renderItem={({item, index}) => <RenderItem item={item} index={index} key={index}/> }
                                    keyExtractor={({item, index}) => index}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{paddingHorizontal: 25}}
                                />
                        }
                    </View>
                </View>
            </View>

            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={BlurBG}
                style={{
                    borderStartEndRadius: 10, borderStartStartRadius: 10,
                    backgroundColor: "#f4f4f4", padding: 5
                }}
            >
                <View style={{
                    padding: 20,
                }}>
                    <Text style={{color: "#000", fontSize: 13, fontWeight: "600", marginBottom: 30}}>Price</Text>

                    <Text style={{color: "#000", fontSize: 13, fontWeight: "600", marginBottom: 15}}>Rating</Text>

                    <View
                        style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
                            width: "100%",
                        }}
                    >
                        {
                            ratingData.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    activeOpacity={0.65}
                                    onPress={() => {
                                        setRate(item.name)
                                    }}
                                    style={[{
                                        flexDirection: "row", alignItems: "center", borderRadius: 10, justifyContent: "center",
                                        backgroundColor: "#f8f8f8", width: WIDTH * 0.12, paddingHorizontal: 10, paddingVertical: 8,
                                        marginHorizontal: 15
                                    }, rate == item.name ? {backgroundColor: PRIMARY_COLOR} : null
                                    ]}
                                >
                                    <Text style={{color: "#000", fontSize: 13, fontWeight: "700", marginRight: 10}}>{item.name}</Text>
                                    <Image source={require("../../../../assets/icons/Star.png")} style={{width: 12, height: 12}} resizeMode={"contain"} />
                                </TouchableOpacity>
                            ))
                        }
                    </View>

                    <Text style={{color: "#000", fontSize: 13, fontWeight: "600", marginVertical: 30}}>Categories</Text>

                    <View
                        style={{
                            flexDirection: "row", alignItems: "center", justifyContent: "space-evenly",
                            width: "50%",
                        }}
                    >
                            <TouchableOpacity
                                activeOpacity={0.65}
                                onPress={() => {
                                    setBuyCat(true)
                                }}
                                style={[
                                    {
                                        alignItems: "center", borderRadius: 10, justifyContent: "center",
                                        backgroundColor: "#f8f8f8", paddingHorizontal: 20, paddingVertical: 8,
                                        marginHorizontal: 10
                                    }, buyCat == true ? {backgroundColor: PRIMARY_COLOR} : null
                                    ]}
                            >
                                <Text style={{color: "#000", fontSize: 13, fontWeight: "600"}}>Buy</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.65}
                                onPress={() => {
                                    setBuyCat(false)
                                }}
                                style={[{
                                    alignItems: "center", borderRadius: 10, justifyContent: "center",
                                    backgroundColor: "#f8f8f8", paddingHorizontal: 20, paddingVertical: 8,
                                    marginHorizontal: 1
                                }, !buyCat ? {backgroundColor: PRIMARY_COLOR} : null
                                ]}
                            >
                                <Text style={{color: "#000", fontSize: 13, fontWeight: "600",}}>Rate</Text>
                            </TouchableOpacity>
                    </View>

                    <Text style={{color: "#000", fontSize: 13, fontWeight: "600", marginVertical: 30}}>Facilities</Text>

                    <View
                        style={{
                            alignItems: "center", flexWrap: "wrap",
                            width: "100%", flexDirection: "row",
                        }}
                    >
                        {
                            faciliatiesData.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    activeOpacity={0.65}
                                    onPress={() => {
                                        setFac(item)
                                    }}
                                    style={[
                                        {
                                            alignItems: "center", borderRadius: 10, justifyContent: "center",
                                            backgroundColor: "#f8f8f8", paddingHorizontal: 30, paddingVertical: 10,
                                            marginHorizontal: 10, marginVertical: 10
                                        },
                                        fac == item ? {backgroundColor: PRIMARY_COLOR} : null
                                    ]}
                                >
                                    <Text style={{color: "#000", fontSize: 13, fontWeight: "600"}}>{item}</Text>
                                </TouchableOpacity>

                            ))
                        }

                    </View>

                </View>
            </BottomSheetModal>
        </ScreenView>
      </BottomSheetModalProvider>
  );
};


export default SearchScreen;
