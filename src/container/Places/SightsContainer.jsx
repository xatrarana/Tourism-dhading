import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const SightsContainer = () => {
  return (
    <View>
      <View>
        <TextInput placeholder='Search Destination' className = "bg-white py-4 rounded-lg mx-2 mt-4 px-4"/>
      </View>
      
    </View>
  )
}

export default SightsContainer