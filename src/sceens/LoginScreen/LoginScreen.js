import React from 'react'
import { Text, View } from 'react-native'
import OtpScreenComponent from '../../components/AuthComponent/OtpScreenComponent'
import PhoneScreenComponent from '../../components/AuthComponent/PhoneScreenComponent'


function LoginScreen() {
  return (
    <PhoneScreenComponent/>
    // <OtpScreenComponent/>
  )
}

export default LoginScreen