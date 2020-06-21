import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import PushNotification from "react-native-push-notification"
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getData } from '../../redux/action/data'

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
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        fontSize: 30,
        color: '#2A2AC0'
    },
    textData: {
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#5A5A5A',
        marginBottom: 20
    },
    card: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom:'3%'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    isLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        alignItems: 'center',
        marginBottom:'1%'
    }
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 10,
        }
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

    componentDidMount() {
        this.getData()
        // this.notifHandle()
    }
    notifHandle() {
        PushNotification.localNotification({
            title: "Telkom Sigma",
            message: "Welcome Back To The App",
        });
    }

    getData() {
        this.props.dispatch(getData());
    }
    handlePage = () => {
        this.setState({
            limit: this.state.limit + 10
        })
        this.props.dispatch(getData(this.state.limit));
    }
    isLoadingFlatlist = () => {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    renderRow = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetail', { data: item.id })} style={styles.card}>
                <View style={styles.number}><Text>Post id : {item.id}</Text></View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.body}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const { datas, isLoading } = this.props
        return (
            <View style={styles.wrap}>
                <View style={styles.wrapContent}>
                    <View style={styles.wrapHeader}>
                        <TouchableOpacity >
                            <Icon style={styles.icon} name="ios-log-out" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textData}>Post List</Text>
                    {
                        isLoading ? <View style={styles.isLoading}><ActivityIndicator size="large" color="#0000ff" /></View> :
                            <FlatList
                                data={datas}
                                renderItem={this.renderRow}
                                keyExtractor={(item) => item.id.toString()}
                                onEndReached={this.handlePage}
                                onEndReachedThreshold={0.1}
                                ListFooterComponent={this.isLoadingFlatlist}
                            />
                    }
                    {/* <TouchableOpacity style={styles.card}>
                        <View style={styles.number}><Text>Post id :</Text></View>
                        <Text style={styles.title}>Title</Text>
                        <Text>body</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datas: state.data.data.data,
        isLoading: state.data.isLoading
    }
}

export default connect(mapStateToProps)(Home)