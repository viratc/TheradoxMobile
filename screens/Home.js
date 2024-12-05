import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import OTPScreen from './OTPScreen';
import CreateProfile from './CreateProfile';

function Home() {

    const [flag, setFlag] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setFlag(true)
      }, 1500)
    },[]);

    // Display logo for 1.5s, move to the OTP screen or Dashboard, depending on login state
    return (
        <View style={styles.container}>
            {!flag ? <Image source={require('../assets/images/logo.png')} /> : <CreateProfile />}
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});