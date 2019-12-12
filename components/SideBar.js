import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';


export default Sidebar = props => (
    <ScrollView>
        <ImageBackground
            source={require('../assets/textura.jpg')}
            style={{ width: undefined, padding: 16, paddingTop: 48 }}
        >
            <Image
                source={require('../assets/user.png')}
                style={StyleSheet.profile}
            />
            <Text style={styles.name}> User name </Text>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor:   '#FFF'
    },
    name:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    }
});