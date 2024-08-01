import React from 'react'
import { StyleSheet, View } from 'react-native'

export const PositionScreen = () => {
    return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxYellow}></View>
        <View style={styles.bowGreen}></View>
    </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        //width: 300,
        //height: 300,
        //paddingTop: 50,
        marginTop: 50,
        backgroundColor: 'orange',
        //justifyContent: 'center',
        //alignItems: 'center'
    },

    boxPurple:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top: 0,
        //bottom:10,
        right:0
        
    },

    boxYellow:{
        width:100,
        height:100,
        backgroundColor:'yellow',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right: 0
    },

    bowGreen:{
        width:100,
        height:100,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        left:0,
        right: 0,
        top: 0
    }
})