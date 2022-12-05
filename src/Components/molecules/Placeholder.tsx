import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'

const Placeholder = (props: { text: String }) => {
  const { Layout, Fonts } = useTheme()

  return (
    <View style={Layout.center}>
      <Text style={Fonts.textRegular}>{props.text}</Text>
    </View>
  )
}

export default Placeholder
