import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxModelObjectScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Modelo de Caja</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        backgroundColor: 'red'
    },
    title:{
        fontSize: 30,
        //width: 150,
        borderWidth: 10,
        //padding: 30
        paddingHorizontal: 100,
        paddingVertical: 30,
        marginHorizontal:20
    }     
});