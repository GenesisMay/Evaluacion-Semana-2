import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
        <Text style={styles.box1}>Caja 1</Text>
        <Text style={styles.box2}>Caja 2</Text>
        <Text style={styles.box3}>Caja 3</Text>
    </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        //height: 400,
        marginTop: 50,
        backgroundColor: 'orange',
        flexDirection: 'row', //direccion de elementos
        justifyContent:'center', //justificar el contenido
        alignItems:'flex-start', //alineat los elementos de vatios
        flexWrap:'wrap' //distribuir el contenido dentro de la pantalla
    },

    box1:{
        //flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf:'center' //alinea de manera individual
    },

    box2:{
        //flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf:'flex-start'
    },

    box3:{
        //flex: 3,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        //alignSelf:'flex-end'
    },
})