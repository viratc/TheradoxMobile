import { Image, Pressable, StyleSheet, View } from "react-native";

function NextArrowBtn() {

    function pressHandler() {
        console.log('Pressed');
    }

    return (
        <View>
            <Pressable
                style={(pressed) => 
                pressed 
                    ? [styles.frontArrow, styles.pressed]
                    : styles.frontArrow
                }
                onPress={pressHandler()}
                android_ripple={{color: '#AAAAAA'}}
            >
                <Image 
                    style={styles.frontArrow} 
                    source={require('../assets/images/mdiArrow.png')} 
                />
            </Pressable>
        </View>
    )
}

export default NextArrowBtn;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16, 
        elevation: 2,  
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    frontArrow: {
        height: 16,
        width: 16,
    },
    pressed: {
        opacity: 0.75,
    }
});