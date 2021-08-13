import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <Text >Dimensiones Screen</Text>

            <View style={{ 
                ...styles.cajaMorada,
                width: width * 0.6
            }} ></View>
            <View style={ styles.cajaNaranja } ></View>
        </View>
    )
}

const styles = StyleSheet.create({
   cajaMorada:{
       backgroundColor: '#5856D6'
   },
   cajaNaranja:{
    backgroundColor: '#F0A23B'
}
})
