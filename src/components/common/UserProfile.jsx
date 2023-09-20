import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const UserProfile = () => {
  const router = useRouter();
  return (
    <>
      <TouchableOpacity
          onPress={() => router.push("/settings")}
          className="  absolute z-20 right-2 top-2  "
          hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          style={{ width: 40, height: 40 }}
        >
          <Image
          
            className="rounded-full"
            style={{ width: "100%", height:"100%" }}
            source={{
              uri: "https://img1.wsimg.com/isteam/ip/56c0cc13-b423-4d20-93f5-b95b2a675d4e/Robert-Fishman.jpg",
            }}
          />
        </TouchableOpacity>
    </>
  )
}

export default UserProfile