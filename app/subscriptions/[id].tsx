import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const subscritionDetails = () => {
    const {id}=useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>subscritionDetails</Text>
      <Link href="/(tabs)/subscription">Back to subscription</Link>
      <Text>subscription id: {id}</Text>
    </View>
  )
}

export default subscritionDetails