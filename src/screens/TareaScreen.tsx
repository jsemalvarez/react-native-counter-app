import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada }></View>
            <View style={ styles.cajaNaranja }></View>
            <View style={ styles.cajaAzul }></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // flex:1,
        // alignSelf:'flex-end',
        // bottom:-100
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // flex:1,
        // alignSelf:'center',
        // left:100,
        top:50
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // flex:2,
    },
})