import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PRIMARY_COLOR, WHITE} from "../../global/theme";
import {Gilroy_bold} from "../../constants/font";

export const CButton = ({style, textStyle, text, loading, onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.6}
        >
            <Text style={[styles.text, textStyle]}>{text ? text : "Continue"}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        padding: 18,
        width: "100%",
        borderRadius: 8
    },
    text: {
        color: WHITE,
        fontFamily: Gilroy_bold,
        fontSize: 13
    }
})
