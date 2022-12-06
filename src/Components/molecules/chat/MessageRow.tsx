import useTheme from '@/Hooks/useTheme'
import Message from '@/Types/chat/Message'
import { myFakeUser } from '@/Utils/fakeData/user'
import React, { useMemo } from 'react'
import { View, Text } from 'react-native'

/**
 * Render a message in a chat
 * @param props message, the message to display
 */
const MessageRow = (props: { message: Message }) => {
  const { Layout, Fonts, Gutters } = useTheme()

  /**
   * Return true if the message author pocess my the connected user id, false otherwise
   */
  const isMyMessage: Boolean = useMemo(() => {
    return props.message.author.id === myFakeUser.id
  }, [props.message.author.id])

  return (
    <View style={isMyMessage ? Layout.alignItemsEnd : Layout.alignItemsStart}>
      <Text style={[Fonts.textRegular, Gutters.smallVMargin]}>
        {props.message.author.name}
      </Text>
      <Text style={Fonts.textSmall}>{props.message.content}</Text>
    </View>
  )
}

export default MessageRow
