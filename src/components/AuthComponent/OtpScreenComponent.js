import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextInput from 'react-native-otp-textinput';
import { AuthContext } from '../../context/AuthContext';

import FlatButton from '../Button/ButtonComponent';
import PhoneScreenComponent from './PhoneScreenComponent';

const OtpScreenComponent = () => {
  const [otp, setOtp] = useState();
  const [showPhoneScreen, setShowPhoneScreen] = useState(false);
  const {handleOtp,phoneNumber} = useContext(AuthContext)

  const handelSubmit = () => {
    console.log(otp.state.otpText.join(''));
    handleOtp(otp.state.otpText.join(''));
  };
  const handelCancel = () => {
    setShowPhoneScreen(true);
  }
  return (
    
      showPhoneScreen ? <PhoneScreenComponent /> :  ( <LinearGradient
      colors={['#032525', '#0c4848']}
      style={styles.linearGradient}>
      <Text style={styles.desc}> OTP has been sent to {phoneNumber}  </Text>
      <View style={styles.ViewField}>
        <Text style={styles.text}>Enter OTP</Text>
        <OTPTextInput
          ref={e => setOtp(e)}
          inputCount={6}
          textInputStyle={styles.InputField}
          containerStyle={styles.container}
          handleTextChange={e => setOtp(e)}
        />
        <FlatButton text={'SUBMIT'} onPress={handelSubmit} style={ {
    width: 350,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#F5F878',
  }}
   textStyle={{
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    color: 'black'
  }}/>
        <FlatButton text={'Change Number'} onPress={handelCancel} style={ {
    width: 350,
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#fc6d60',
    marginTop: 10,
    color: 'white'
  }}  
  textStyle={{
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  }}

  />
      </View>
    </LinearGradient>)
    
  
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    minHeight: 100,
  },

  InputField: {
    borderWidth: 1,
    borderColor: '#F5F878',
    borderRadius: 8,
    backgroundColor: 'lightgrey',
    textAlign: 'center',
  },

  container: {
    marginBottom: 15,
  },

  ViewField: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 15,
  },
  desc: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 120
  }
});

export default OtpScreenComponent;
