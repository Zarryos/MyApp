import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'

/**
 * Render a placeholder with a text
 * @param props text, the text to display
 */
const Placeholder = (props: { text: String }) => {
  const { Layout, Fonts } = useTheme()

  // TODO: Do a nice placeholder, use an svg from undraw.co (or other)
  return (
    <View style={Layout.center}>
      <Text style={Fonts.textRegular}>{props.text}</Text>
    </View>
  )
}

export default Placeholder
