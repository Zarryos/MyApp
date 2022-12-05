import Message from '@/Types/chat/Message'
import React from 'react'
import { View, Text } from 'react-native'

const MessageRow = (props: { message: Message }) => (
  <View>
    <Text>{props.message.author.name}</Text>
    <Text>{props.message.content}</Text>
  </View>
)

export default MessageRow
