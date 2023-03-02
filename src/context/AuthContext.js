import React, {createContext, useState, useContext} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [user, setUser] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [authenticated, setAutheticated] = useState(false);
  const [confirm, setConfirm] = useState(null);

  auth().onAuthStateChanged(async u => {
    if (u) {
      setAutheticated(true);
      setUser(u);
    } else {
      setAutheticated(false);
    }
  });

  const handleAuth = async phoneNumber => {
    setPhoneNumber(phoneNumber)
    try {
      const confirmation = await auth().signInWithPhoneNumber(
        `+91${phoneNumber}`,
      );

      setConfirm(confirmation);
    } catch (error) {
      alert(error);
    }
  };

  const handleOtp = async otp => {
    await confirm.confirm(otp);
  };

  const handleLogout = async () => {};

  const contextProps = {
    confirm,
    authenticated,
    user,
    handleAuth,
    handleOtp,
    handleLogout,
    phoneNumber
  };

  return (
    <AuthContext.Provider value={contextProps}>
      {props.children}
    </AuthContext.Provider>
  );
};
