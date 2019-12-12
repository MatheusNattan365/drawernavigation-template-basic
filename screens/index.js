import React from 'react'
import Screen from './Screen'

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile" />
export const HomeScreen = ({navigation}) => <Screen navigation={navigation} name="Home" />
export const OtherScreen = ({navigation}) => <Screen navigation={navigation} name="Other" />
export const SignOutScreen = ({navigation}) => <Screen navigation={navigation} name="Logout" />