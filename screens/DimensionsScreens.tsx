import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionsScreens = () => {
    
    //const {width, height}= Dimensions.get('window');
    //console.log(dimension.width);
    //console.log(dimension.height)
    const {width,height}= useWindowDimensions();
    return (
        <View>
            <View style={styles.cotainer}>
                <View style={{...styles.boxPurple, width: width*0.20}}></View>
                <View style={styles.boxOrange}></View>
        </View>
        <Text style={{fontSize: 30}}>W: {width}, H {height}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    cotainer:{
        marginTop: 50,
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },

    boxPurple:{
        
        backgroundColor: 'purple',
        width: '50%',
        height:'50%'
    },

    boxOrange:{
        backgroundColor:'orange'
    }
});
