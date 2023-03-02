import React from 'react'
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

export const AvatarComponent = () => {
  return (
    <>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:'https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000'}}/>
            <Text style={styles.text}>Nilanjan Das</Text>
        </View>
        
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#0c4848',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: 'red',
        borderWidth: 5,
        borderColor: "#F5F878",
    },
    text: {
        fontSize: 20,
        fontFamily: 'Poppins-Light',
        color: 'white',

    }
})

