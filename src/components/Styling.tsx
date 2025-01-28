import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function StylingDemo() {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
                marginBottom: 15,
            }}>
                <Text style={{
                    color: '#FFF', 
                    fontSize: 15, 
                    fontWeight: 'bold'
                }}
                >
                    Inline Style Exampless
                </Text>

            </View>
                <View style={[styles.combinedStyle, {borderColor: 'purple', borderWidth: 2 }]}>
                    <Text style={[styles.combinedText, {textDecorationLine: 'underline'}]}>Text combined decoration-1</Text>
                    <Text style={[styles.combinedText, {fontWeight: 'bold', color: 'red'}]}>Text combined decoration-2</Text>
                </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    combinedStyle: {
        backgroundColor: 'lightyellow', 
        padding: 10, 
        borderRadius: 5, 
        marginTop: 20
    }, 
    combinedText : {
        fontSize: 20
    }
})

export default StylingDemo