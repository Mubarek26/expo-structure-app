import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'


type Params = {
    id: string
 }
const MovieDetails = () => {
    const { id } = useLocalSearchParams<Params>()
  return (
    <View>
      <Text>Movie details: {id}</Text>
    </View>
  )
}

export default MovieDetails

const styles = StyleSheet.create({})