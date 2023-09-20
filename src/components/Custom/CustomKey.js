import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from "react-native";
import {GREY, WIDTH} from "../../global/theme";
import {Gilroy_bold} from "../../constants/font";

function CustomKey({onPress, text, print}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.55}
            style={styles.container}
        >
            {
                print ?
                    null
                    // <Image source={require("../../../assets/icons/finger-print.png")} style={{width: 18, height: 18}} resizeMode={"contain"} />
                    :
                    <Text style={styles.text}>{text}</Text>
            }
        </TouchableOpacity>
    );
}

export default CustomKey;

const styles = StyleSheet.create({
    container: {
        width: WIDTH * 0.15,
        height: WIDTH * 0.15,
        backgroundColor: GREY,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: WIDTH * 0.15
    },
    text: {
        fontSize: 21,
        fontFamily: Gilroy_bold,
    }
})
