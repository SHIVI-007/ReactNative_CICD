import React from 'react'
import {StyleSheet, Text, View, TextInput } from 'react-native'

const FormComponent = () => {
  return (
    <View style={styles.ViewField}>
        <Text style={styles.text}>
            Enter Phone Number
        </Text>
        <TextInput keyboardType='numeric' maxLength={10} style={styles.InputField}/>   
    </View>
  )
}

const styles = StyleSheet.create({
    InputField: {
        borderWidth: 1,
        borderColor: "#F5F878",
        borderRadius: 25,
        backgroundColor: 'lightgrey',
        width: 300,
        marginTop: 15,
        textAlign: 'center',
    },

    ViewField: {
        marginTop: 130,
        marginBottom: 20,
    },

    text: {
        color: 'white',
    }
});

export default FormComponent