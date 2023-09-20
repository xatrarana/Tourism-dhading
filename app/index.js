import { View, Text } from 'react-native'
import React from 'react'
import WelcomeContainer from '../src/container/WelcomeContainer'
import SignUpContainer from '../src/container/SignUpContainer'
import SignInContainer from '../src/container/SignInContainer'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <>
      <Redirect href ="/onboard" />
      

    </>
  )
}

export default index