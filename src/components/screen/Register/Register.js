import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../../img/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#ECF1FA',
        justifyContent: 'center',
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
        color: '#181461',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    input: {
        width: '84%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        justifyContent:'center'
    },
    inputText: {
        marginHorizontal:40,
    },
    icon: {
        fontSize:20,
        position:'absolute',
        marginLeft:20,
        color:'#717070'
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

class Register extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.wrapLogin}>
                    <Text style={styles.textLogin}>Register</Text>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="md-person" />
                        <TextInput style={styles.inputText} placeholder='Full Name' />
                    </View>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="ios-mail" />
                        <TextInput style={styles.inputText} placeholder='Email' />
                    </View>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="md-key" />
                        <TextInput style={styles.inputText} placeholder='Password' />
                    </View>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="ios-phone-portrait" />
                        <TextInput keyboardType="numeric" style={styles.inputText} placeholder='Phone Number' />
                    </View>
                    <View style={styles.input}>
                        <Icon style={styles.icon} name="md-locate" />
                        <TextInput style={styles.inputText} placeholder='Address' />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Register