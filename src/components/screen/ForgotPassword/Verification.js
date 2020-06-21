import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput,ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../../img/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#ECF1FA',
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent: 'space-around'
    },
    wrapLogo: {
        alignItems: 'center'
    },
    logo: {
        marginBottom: 12
    },
    logoText: {
        color: '#2A2AC0',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50
    },
    wrapLogin: {
        width: '100%',
        alignItems: 'center',
    },
    textLogin: {
        color: '#564FD2',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '84%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 30,
        justifyContent: 'center'
    },
    inputText: {
        marginHorizontal: 40,
    },
    icon: {
        fontSize: 20,
        position: 'absolute',
        marginLeft: 20,
        color: '#717070'
    },
    wrapForgot: {
        width:290,
        alignItems:'flex-end',
        marginBottom:10
    },
    button: {
        width: 300,
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#2A2AC0',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btnText: {
        color: 'white'
    }
})

class Verification extends Component {
    handleSend = ()=>{
        this.props.navigation.navigate('Login')
        ToastAndroid.show("Verification Accepted", ToastAndroid.SHORT);
    }
    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.wrapLogo}>
                    <Image style={styles.logo} source={Logo} />
                    <Text style={styles.logoText}>TelkomSigma</Text>
                </View>
                <View style={styles.wrapLogin}>
                    <Text style={styles.textLogin}>Verification</Text>
                    <Text style={{marginBottom:20,color:'#9B9999'}}>Insert your code here</Text>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="md-key" />
                        <TextInput keyboardType="numeric" secureTextEntry={true} style={styles.inputText} placeholder='Code Verification' />
                    </View>
                    <TouchableOpacity onPress={()=>this.handleSend()} style={styles.button}>
                        <Text style={styles.btnText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Verification