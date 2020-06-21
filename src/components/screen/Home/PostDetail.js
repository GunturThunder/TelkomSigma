import React, { Component } from 'react'
import { View,Text } from 'react-native'

class PostDetail extends Component {
    render(){
        console.log("dtail",this.props.navigation.getParam("data"))
        return(
            <View>
                <Text>Detail</Text>
            </View>
        )
    }
}

export default PostDetail