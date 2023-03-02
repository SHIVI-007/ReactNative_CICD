import React, {useState, useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient'
import FlatButton from '../Button/ButtonComponent'
import OtpScreenComponent from './OtpScreenComponent';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../context/AuthContext';

const PhoneScreenComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState()
  const [showOtp, setShowOtp] = useState()
  const {handleAuth} = useContext(AuthContext);

  const handlePhoneNumber = async () => {
     handleAuth(phoneNumber);
    setShowOtp(true)
  }
  return (
    <>
      {showOtp ? (
        <OtpScreenComponent />
      ) : (
        <LinearGradient
          colors={['#032525', '#0c4848']}
          style={styles.linearGradient}>
          <Text style={styles.text}> CAALM </Text>
          <View style={styles.ViewField}>
            <Text style={styles.textSm}>Enter Phone Number</Text>
            <TextInput
              keyboardType="numeric"
              maxLength={10}
              style={styles.InputField}
              onChangeText={phn => setPhoneNumber(phn)}
            />
          </View>
          <FlatButton text={'PROCEED'} onPress={handlePhoneNumber}  style={ {
    width: 300,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#F5F878',
  }}  textStyle={{
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    color: 'black'
  }} />
        </LinearGradient>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    minHeight: 100,
    alignItems: 'center',
    paddingTop: 80,
  },
  text: {
    fontFamily: 'Comfortaa-Light',
    fontSize: 40,
    letterSpacing: 5,
    color: 'white',
  },
  textSm: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    color: 'white',
  },
  InputField: {
    borderWidth: 1,
    borderColor: '#F5F878',
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
});
export default PhoneScreenComponent;
