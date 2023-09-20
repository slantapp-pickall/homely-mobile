import {Button, Image, Linking, Text, TouchableOpacity, View} from "react-native";
import {Poppins_medium} from "../../../constants/font";

const Payments = () => {
  return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
          <Image source={require("./../../../../assets/payment.png")} style={{width: 200, height: 200}}/>
          <Text style={{fontSize: 20}}>Complete Booking</Text>
          <Text style={{fontSize: 30, marginVertical: 20}}>₦100,200.00</Text>
          <TouchableOpacity
              style={{
                  width: "70%", paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#fff",
                  alignItems: "center", justifyContent: "center", borderRadius: 10, flexDirection: "row",
                  marginTop: 50, borderWidth: 1, borderColor: "#10B981"
              }}
              activeOpacity={0.65} onPress={()=>{
              Linking.openURL("https://play.google.com/store/search?q=kuda&c=apps").then(r => null)
          }}>
              <Text style={{fontFamily: Poppins_medium, fontSize: 14, color: "#000", marginHorizontal: 20}}>Pay With Kuda</Text>
              <Image source={require("../../../../assets/kuda.webp")} style={{width: 25, height: 25}} />
          </TouchableOpacity>
          <Text style={{fontSize: 10, position: 'absolute', bottom: 5, fontWeight: 'bold'}}>Protect By Homely</Text>
      </View>
  )
}
export default Payments
