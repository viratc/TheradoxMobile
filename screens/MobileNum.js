import { useState } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import NextArrowBtn from "../components/NextArrowBtn";


function MobileNum() {

    const [mobile, setMobile] = useState();

    return(
        <View style={styles.container}>

            <Image 
                style={styles.indianFlag} 
                source={require('../assets/images/flagIndia.png')} 
            />

            <TextInput 
                maxLength={11}
                placeholder="Mobile Number"
                backgroundColor='#E7E7E7'
                keyboardType='number-pad'
                style={styles.textBox}
                value={mobile}
                onChangeText={text => setMobile(text)}
            />

            <NextArrowBtn />

        </View>
    );

}

export default MobileNum;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBox: {
        flex: 1, 
        padding: 6, 
        borderRadius: 14.5,
        borderWidth: 1,
    },
    indianFlag: {
        height: 29,
        width: 29
    },
});