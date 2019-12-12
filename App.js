import React from 'react';

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'

import { Feather } from '@expo/vector-icons'

import {
  ProfileScreen,
  HomeScreen,
  OtherScreen,
  SignOutScreen
} from './screens';



import SideBar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      drawerIcon: () => <Feather name='user' size={16} color='#A10D0D' />
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      drawerIcon: () => <Feather name='home' size={16} color='#A10D0D' />
    }
  },
  OtherScreen: {
    screen: OtherScreen,
    navigationOptions: {
      title: 'Other',
      drawerIcon: () => <Feather name='layers' size={16} color='#A10D0D' />
    }
  },
  SignOutScreen: {
    screen: SignOutScreen,
    navigationOptions: {
      title: 'SignOut',
      drawerIcon: () => <Feather name='log-out' size={16} color='#A10D0D' />
    }
  }
}, {
  contentComponent: props => <SideBar  {...props} />,
  drawerWidth: Dimensions.get('window').width * 0.75,
  hideStatusBar: true,

  contentOptions: {
    activeBackgroundColor:'rgba(161, 13, 13, 0.2)',
    activeTintColor: '#A10D0D',
    itemsContainerStyle:{
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle:{
      borderRadius: 4
    }
  }

});



export default createAppContainer(DrawerNavigator); 