import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

function OTPScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.container}>

                <Image 
                    style={styles.otpIcon}
                    source={require('../assets/images/otpText.png')}
                />

                <Text style={styles.verifyOTPText}> Verify the OTP </Text>

                <Text style={styles.enterOTPText}> Enter the OTP sent to {9999999999}</Text>

            </View>

            <View style={styles.otpBoxContainer}>
                <TextInput 
                    maxLength={1}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.textBox}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.textBox}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.textBox}
                />
                <TextInput 
                    maxLength={1}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.textBox}
                />
            </View>

            <View style={styles.otpBoxContainer}>
                <Text>Request OTP</Text>
                <Text> | </Text>
                <Text>Change Number</Text>
            </View>

        </View>
    )
}

export default OTPScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    otpIcon: {
        width: 26,
        height: 25,
    },
    verifyOTPText: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 20,
        marginBottom: 20
    }, 
    enterOTPText: {
        fontSize: 16,
        fontWeight: 700,
        color: '#494949', 
        marginBottom: 20,
    }, 
    otpBoxContainer: {
        flex: 1,
        flexDirection: 'row',      
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        borderRadius: 5,
        borderWidth: 1,
        width: 44,
        height: 44,
        margin: 15
    }
});