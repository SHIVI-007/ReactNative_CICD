/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   inflationRate: 0.0,
    //   riskFreeRate: 0.0,
    //   amount: 0.0,
    //   timeInYears: 1,
    //   afterInflation: 0.0,
    //   atRiskFree: 0.0,
    //   atRiskFreeAfterInflation: 0.0,
    //   difference: 0
    // }

    this.checkPreviousSession();
  }


  async checkPreviousSession () {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if(didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert("Sorry about that crash, we're working on a solution");
    }
  }


  render(){

    return (

      <View>
        <Button title='Crash' 
            onPress={()=> Analytics.trackEvent('Calculation_inflation' ,{Internet : 'wifi',Gps: 'off'})}/>
      </View>



    );

    


  };



}


