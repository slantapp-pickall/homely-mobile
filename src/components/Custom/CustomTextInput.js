import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable";
import {Ionicons} from "@expo/vector-icons";
import {DMSans_medium, Gilroy_semi_bold} from "../../constants/font";

const CustomTextInput = ({
    onChangeText, ref, placeholder,
    value, onFocus, style, valid,
    props, keyboardType, setValue, phone,
    setCheck, less, other, email, title, list,
    sheetVal, setSheetVal, bottomSheetRef, sheetTitle,
    containerStyle, pass
}) => {

    const [isValidValue, setIsValidValue] = useState({
        msg: title + ' is required!',
        check: valid,
    });

    const [isVisible, setIsVisible] = useState(false)
    const handleValidate = (val) => {
        setValue(val);
        // console.log(value, " VR :: ", val);

        if (val.length <= 0) {
            setIsValidValue({
                msg: pass ? "Password" : title + ' is Empty',
                check: false,
            });
            setCheck(false);
        } else if (val.length < (pass ? 7 : less ? 1 : 3)) {
            setIsValidValue({
                msg: pass ? "" : 'Invalid ' + pass ? "Invalid Password" : 'Invalid ' + title,
                check: false,
            });
            setCheck(false);
        } else {
            setIsValidValue({
                ...isValidValue,
                check: true,
            });
            setCheck(true);
        }
    };
    const handleValidPhone = (val) => {
        setValue(val);

        const regx2 =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

        if (val.length <= 0) {
            setIsValidValue({
                msg: 'Phone Number Field is Empty',
                check: false,
            });
            setCheck(false);
        } else if (regx2.test(val)) {
            setIsValidValue({
                ...isValidValue,
                check: true,
            });
            setCheck(true);
        } else {
            setIsValidValue({
                msg: 'Invalid phone number',
                check: false,
            });
            setCheck(false);
        }
    }

    const handleValidEmail = (val) => {
        console.log({val});
        setValue(val);

        const regx =
            /^([a-zA-Z0-9_.\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9\s]{2,4})+$/ ||
            /^([0-9\+\-])/;


        if (val.length <= 0) {
            setIsValidValue({
                msg: 'Email Field is Empty',
                check: false,
            });
            setCheck(false);
        } else if (regx.test(val)) {
            setIsValidValue({
                ...isValidValue,
                check: true,
            });
            setCheck(true);
        } else {
            setIsValidValue({
                msg: 'Invalid email address',
                check: false,
            });
            setCheck(false);
        }
    };

    return (
        <View style={[{width: "100%", marginBottom: 8, alignSelf: "center", padding: 20}, containerStyle]}>
            {title && !phone && <Text style={styles.text}>{title}</Text>}
            <View style={{width: "100%", flexDirection: "row", alignItems: "center"}}>
                <TextInput
                    ref={ref}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    placeholderTextColor={'#ccc'}
                    value={value}
                    onChangeText={(e) => onChangeText ? onChangeText(e) : email ?
                        handleValidEmail(e) : phone ? handleValidPhone(e) : handleValidate(e)}
                    onEndEditing={e => onChangeText ?
                        onChangeText(e.nativeEvent.text) : email ? handleValidEmail(e.nativeEvent.text) : phone ?
                            handleValidPhone(e.nativeEvent.text) : handleValidate(e.nativeEvent.text)}
                    keyboardType={keyboardType ? keyboardType : email ? "email-address" : phone ? "phone-pad" : "default"}
                    onFocus={onFocus}
                    selectionColor={'#000'}
                    secureTextEntry={pass && !isVisible}
                    style={[
                        styles.input,
                        // sheetVal ? {paddingLeft: WIDTH * 0.21} : null,
                        style,
                    ]}
                    props
                />

                {pass &&
                    <TouchableOpacity style={{position: "absolute", right: 20, padding: 10}}
                                      onPress={() => setIsVisible(prev => prev = !prev)}
                    >
                        <Ionicons name={ isVisible ? "eye" : "eye-off"} size={15} style={{alignSelf: "center"}}/>
                    </TouchableOpacity>
                }
            </View>

            {!isValidValue.check && (
                <Animatable.View animation="fadeInDown" duration={500}>
                    <Text
                        style={{
                            color: 'red',
                            fontSize: 12,
                            fontWeight: '600',
                            fontFamily: DMSans_medium,
                        }}>
                        {isValidValue.msg}
                    </Text>
                </Animatable.View>
            )}
        </View>
    );

}

export default CustomTextInput;

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderRadius: 8,
        padding: 10,
        borderWidth: 0.7,
        borderColor: '#ececec',
        fontSize: 12,
        color: 'black',
        fontFamily: DMSans_medium,
    },
    text: {
        fontSize: 13,
        fontFamily: DMSans_medium,
        marginVertical: 5
    }
})
