import React, {useState, useEffect} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Header} from "../../../components/Custom";

const RecommendScreen = ({navigation}) => {


    return (
        <ScreenView>
            <View style={styles.container}>
                <Header navigation={navigation} title={'We \nRecommend'}/>
                <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                    <Text>No Recommendation !</Text>
                </View>
            </View>
        </ScreenView>
    );
};


export default RecommendScreen;
