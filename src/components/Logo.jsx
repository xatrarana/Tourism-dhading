import { View, Text, Image } from 'react-native'
import React from 'react'

const Logo = ({source,size}) => {

  const items = [
    {
        id: 'welcome',
        image: require('../../assets/signInLogo.png'),
    },
    {
        id: 'signin',
        image: require('../../assets/signInLogo.png'),
    },

   
];


const item = items.find((item)=> item.id === source );

console.log(item)


  return (
    <View className >
      <Image  style= {{height:size, objectFit:"contain"}} source={item.image}/>
    </View>
  )
}

export default Logo