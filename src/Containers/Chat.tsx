import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import { useTheme } from '@/Hooks'
import Message from '@/Types/chat/Message'
import MessageRow from '@/Components/molecules/chat/MessageRow'
import {
  createChatMessage,
  getChatMessages,
} from '@/Services/modules/chat/chat'
import { useTranslation } from 'react-i18next'
import Placeholder from '@/Components/molecules/Placeholder'
import MessageComposer from '@/Components/molecules/chat/MessageComposer'
import { useSelector } from 'react-redux'
import { RootStateOrAny } from 'react-redux'

/**
 * Render a list of message (or a placeholder) and a text input
 */
const Chat = () => {
  const { t } = useTranslation()
  const { Gutters, Layout, Colors } = useTheme()

  // TODO: Improve error handling with an Error type and proper message display
  const [error, setError] = useState<Boolean>(false)

  // Listen on messages from the redux store
  const messages = useSelector<RootStateOrAny>(store => store.chat.messages)

  const fetchMessages = useCallback(async () => {
    await getChatMessages().then((success: Boolean) => setError(!success))
  }, [])

  const sendMessage = useCallback(async (text: String) => {
    await createChatMessage(text).then((success: Boolean) => setError(!success))
  }, [])

  // Initial messages loading effect
  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  /**
   * Chat message renderer
   */
  const renderItem = (message: Message) => <MessageRow message={message} />

  /**
   * Placeholder renderer, depending on the error state
   */
  const renderPlaceholder = useMemo(() => {
    let text = t('chat.placeholder.empty')

    if (error) {
      text = t('chat.placeholder.error')
    }

    return <Placeholder text={text} />
  }, [error, t])

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.background }]}>
      {messages || error ? (
        <FlatList
          data={messages}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item: Message) => item.id.toString()}
          ListEmptyComponent={renderPlaceholder}
          style={[Gutters.regularVPadding, Gutters.regularHPadding]}
          inverted={!error}
        />
      ) : (
        <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      )}
      <MessageComposer onDone={(text: String) => sendMessage(text)} />
    </SafeAreaView>
  )
}

export default Chat
