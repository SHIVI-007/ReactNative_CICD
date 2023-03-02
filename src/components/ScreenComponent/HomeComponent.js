import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { AvatarComponent } from '../ProfileComponent/AvatarComponent'

export const HomeComponent = () => {
  return (
    <>
         <LinearGradient
          colors={['#032525', '#0c4848']}
          style={styles.linearGradient}>
            <AvatarComponent />
          </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      minHeight: 100,
    },
})
