import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'

export default function FlatButton({text, onPress, style, textStyle}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
