import React, {useState, useEffect} from "react";
import {ScreenView} from "../../../global/wrapper";
import {styles} from "./style";
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Header} from "../../../components/Custom";
import {apartmenViewData} from "../../../constants";
import {GREY, GREY1, GREY2, WIDTH} from "../../../global/theme";



const ApartmentView = ({navigation}) => {

    const [selected, setSelected] = useState(0);
    const [image, setImage] = useState(apartmenViewData[0].image)

    const _selectImg = (item, index) => {
        setImage(item.image);
        setSelected(index);
    }

  return (
    <ScreenView transparent>
      <ImageBackground source={image} style={styles.container}>
          <Header navigation={navigation} noRightBtn />
          <View style={styles.footerView}>
              {/*<View style={styles.footerView1}>*/}
              <ScrollView horizontal style={{width: WIDTH}} showsHorizontalScrollIndicator={false}>
                  <View style={styles.footerView1}>
                      {
                          apartmenViewData.map((item, index) => (
                                <TouchableOpacity
                                    onPress={() => _selectImg(item, index)}
                                    activeOpacity={0.7}
                                >
                                    <Image source={item.image} style={styles.itemImage} />
                                </TouchableOpacity>
                          ))
                      }
                  </View>

              </ScrollView>
              {/*</View>*/}

              <View style={{flexDirection: "row"}}>
                  {
                      apartmenViewData.map((item, index) => (
                          <View style={[styles.dot, selected !== index ? {backgroundColor: GREY2} : null]} />
                      ))
                  }
              </View>
          </View>
      </ImageBackground>
    </ScreenView>
  );
};


export default ApartmentView;
