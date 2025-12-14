import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const RootLayout = () => {
  return (
   <Tabs>
     <Tabs.Screen
       name="index"
       options={{ headerShown: false, title:'Home' }}
     />
    
   </Tabs>
  )
}

export default RootLayout   

const styles = StyleSheet.create({})