import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { postDetail } from '../../redux/action/data'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#ECF1FA',
    },
    card: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: '3%',
        marginHorizontal: '3%'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    isLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        alignItems: 'center',
        marginBottom: '1%'
    },
    email: {
        marginBottom:'1%'
    }
})

class PostDetail extends Component {
    componentDidMount() {
        this.props.dispatch(postDetail(this.props.navigation.getParam("data")))
    }

    renderRow = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.number}><Text>Post id : {item.postId}</Text></View>
                <Text style={styles.title}>name: {item.name} </Text>
                <Text style={styles.email}>email: {item.email}</Text>
                <Text>body: {item.body}</Text>
            </View>
        )
    }
    render() {
        const { postDetail, isLoading } = this.props
        console.log(isLoading)
        return (
            <View style={styles.wrap}>
                {
                    isLoading ? <View style={styles.isLoading}><ActivityIndicator size="large" color="#0000ff" /></View> :
                        <FlatList
                            data={postDetail}
                            renderItem={this.renderRow}
                            keyExtractor={(item) => item.id.toString()}
                        />
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.data.isLoadingDetail)
    return {
        postDetail: state.data.postDetail.data,
        isLoading: state.data.isLoadingDetail
    }
}

export default connect(mapStateToProps)(PostDetail)