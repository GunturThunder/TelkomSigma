import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Login from './src/components/screen/Login/Login'
import Register from './src/components/screen/Register/Register'
import ForgotPassword from './src/components/screen/ForgotPassword/ForgetPassword'
import Verification from './src/components/screen//ForgotPassword/Verification'
import Home from './src/components/screen/Home/Home'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
  wrap : {
      flex:1,
  }
})

const homeNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions:{
        headerShown: false
      }
    },
    Register: {
      screen: Register,
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions:{
        headerShown: false
      }
    },
    Verification: {
      screen: Verification,
      navigationOptions:{
        headerShown: false
      }
    },
    Home: {
      screen: Home,
      navigationOptions:{
        headerShown: false
      }
    },
  }
)

const AppContainer =  createAppContainer(homeNavigator);

class App extends Component {
  render(){
    return(
      <View style={styles.wrap}>
        <AppContainer />
      </View>
    )
  }
}

export default App