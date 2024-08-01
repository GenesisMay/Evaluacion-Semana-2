import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props{
    title: string;
    position?: string;
    onPress: ()=> void;
}

export const ButtonComponent = ({title, position ,onPress}: Props) => {
    //console.log(title);

    return (
            <TouchableOpacity onPress= {onPress}
                style={[styles.button, 
                    (position === 'br')?
                    styles.right
                    : styles.left
                ]}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
    ) 
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 100,
        width: 70,
        height: 70,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 25,
    },

    buttonText: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center'
    },
    right:{
        right: 10

    },
    left:{
        left:10
    }
});