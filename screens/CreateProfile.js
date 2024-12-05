import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import LogoHeader from "../components/LogoHeader";
import MobileNum from "./MobileNum";

function CreateProfile() {

    return (
        <View style={styles.mainContainer}>

            <View style={styles.topContainer}>
                <LogoHeader/>
                <Image source={require('../assets/images/work.png')} />
                <Text style={styles.textHeader}>Create your health profile</Text>
                <Text style={styles.textPara}>
                    Store, access and share your healthcare {'\n'}
                    data securely anytime, anywhere.
                </Text>
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.startText}>Lets get started!</Text>
                <MobileNum/>
            </View>

        </View>
    );

}

export default CreateProfile;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      alignSelf: 'stretch',      
    },
    topContainer: {
        flex: 0.60,
        flexDirection: 'column',
        backgroundColor: '#000080',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 0.40,
        flexDirection: 'column',
    },
    textHeader: {
        fontWeight: 700,
        fontSize: 20,
        color: '#FFFFFF',
        margin: 10, 
    },
    textPara: {
        fontWeight: 400,
        fontSize: 16,
        color: '#FFFFFF',
        margin: 10, 
        alignItems:'center',
        justifyContent: 'center'
    },
    startText: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 400,
        fontSize: 15,
        margin: 50, 
    }
});