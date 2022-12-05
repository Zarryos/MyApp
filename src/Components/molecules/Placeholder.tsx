import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'

/**
 * Render a placeholder with a text
 * @param props text, the text to display
 */
const Placeholder = (props: { text: String }) => {
  const { Layout, Fonts } = useTheme()

  // TODO: Do a nicer placeholder, use an svg from undraw.co (or other)
  // TODO: Add an action prop, that display a button and trigger the action onPress (ex usecase: reload the chat in case of error)
  return (
    <View style={Layout.center}>
      <Text style={Fonts.textRegular}>{props.text}</Text>
    </View>
  )
}

export default Placeholder
