import { View, Text } from 'react-native'
import React from 'react'
import WelcomeContainer from '../src/container/WelcomeContainer'
import SignUpContainer from '../src/container/SignUpContainer'
import SignInContainer from '../src/container/SignInContainer'

const index = () => {
  return (
    <View>
      {/* <WelcomeContainer/> */}
      {/* <SignUpContainer/> */}
      <SignInContainer/>
      

    </View>
  )
}

export default index