import Toast from "react-native-toast-message";

export const _errorPrompt = (error) => {
    // showMessage({
    //   message: `${error}`,
    //   type: "danger",
    //   textStyle: { fontSize: 12 },
    //   titleStyle: { fontSize: 12, textAlign: "center" },
    // });
    console.log("error: ", error);

    Toast.show({
        type: 'error',
        text1:`${error}`,
    });

};

export const _successPrompt = (msg, msg2 = undefined) => {
    // showMessage({
    //   message: msg,
    //   type: "success",
    //   textStyle: { fontSize: 12 },
    //   titleStyle: { fontSize: 12, textAlign: "center" },
    // });

    Toast.show({
        type: 'success',
        text1: msg,
        text2: msg2 ? msg2 : undefined
    });
};
