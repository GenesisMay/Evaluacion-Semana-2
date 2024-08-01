import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ButtonComponent } from '../src/components/ButtonComponent';

export const CounterScreens = () => {
    const [counter, setCounter] = useState <number> (10);
    return (
    <View style={styles.container}>
            <Text style={styles.title}>
            Contador: {counter} </Text>
            {/*<TouchableOpacity onPress= {() => setCounter(counter + 1)}
                style={styles.button}>
                <Text style={styles.buttonText}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => setCounter(counter - 1)}
                style={styles.button1}>
                <Text style={styles.buttonText}>-1</Text>
            </TouchableOpacity>*/}
            <ButtonComponent title='+1' onPress= {()=> setCounter(counter+1)} />
            <ButtonComponent title='-1' onPress= {()=> setCounter(counter-1)} position='br'/>
    </View>
    ) 
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        textAlign: 'center' ,
        fontSize: 30 ,
        top: -50
    }
});