import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PushNotification from "react-native-push-notification"
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#ECF1FA',
        justifyContent: 'center',
    },
    wrapContent: {
        height: '95%',
        marginHorizontal: 10,
    },
    wrapHeader: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icon: {
        fontSize: 30,
        color: '#2A2AC0'
    },
    textData: {
        fontSize:25,
        marginTop:20,
        fontWeight:'bold',
        color:'#5A5A5A',
        marginBottom:20
    },
    card: {
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#DBDBDB',
        borderBottomColor:'#DBDBDB',
        padding:10
    },
    title: {
        fontWeight:'bold',
        marginBottom:10
    }
})

class Home extends Component {
    constructor(props) {
        super(props);
        PushNotification.configure({
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    }

    // componentDidMount=()=>{
    //     PushNotification.localNotification({
    //         title: "Telkom Sigma",
    //         message: "Welcome Back To The App",
    //       });
    // }
    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.wrapContent}>
                    <View style={styles.wrapHeader}>
                        <TouchableOpacity>
                            <Icon style={styles.icon} name="md-arrow-back" />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Icon style={styles.icon} name="md-person" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textData}>Data</Text>
                    <ScrollView>
                        <View style={styles.card}>
                            <Text style={styles.title}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</Text>
                            <Text>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default Home