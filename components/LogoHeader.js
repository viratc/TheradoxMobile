import { Image, StyleSheet, Text, View } from "react-native";

function LogoHeader(){

    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo} 
                source={require('../assets/images/logo.png')} 
            /> 
            <Text style={styles.name}>TheraDox</Text>
        </View>
    );

}

export default LogoHeader;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',      
      alignItems: 'center',
    },
    logo: {
        height: 41,
        width: 41,
        marginRight: 7.5,
    },
    name: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 36,
        color: '#FBFBFC',
    }
});