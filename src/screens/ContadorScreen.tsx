import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10)
    return (
        <View style={ styles.container}>

            <Button 
                title="Click"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Text
                style={ styles.title }
            >
                Contador: { contador }
            </Text>

            <Fab 
                title="+1"
                onPress={ () => setContador( contador + 1 ) }
            />

            <Fab 
                title="-1"
                position='bl'
                onPress={ () => setContador( contador - 1 ) }
            />

            {/* <TouchableOpacity
                style={ styles.fabLocationBL }
                onPress={ () => setContador( contador - 1 ) }
            >
                <View 
                    style={ styles.fab }                    
                >
                    <Text
                        style={ styles.fabText } 
                    >-1</Text>
                </View>
            </TouchableOpacity> */}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center'
    },
    title:{
        textAlign: 'center',
        fontSize:40
    },
    fabLocationBR:{
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL:{
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fab:{
        backgroundColor:'#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
