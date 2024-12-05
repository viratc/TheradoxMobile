import { Image, StyleSheet, Text, View } from "react-native";

function Disclosure() {

    return (
        <View style={styles.container}>

            <Image source={require('../assets/images/group.png')} />

            <Text>
                This app requires permission to help you store and {'/n'}
                share your healthcare data securely. Please allow access
                to: 

            </Text>

            <View>
            

            </View>

        </View>
    );
}

export default Disclosure;

const styles = StyleSheet.create(
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
)