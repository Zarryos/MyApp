import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
import { useTheme } from '@/Hooks'
import Message from '@/Types/chat/Message'
import MessageRow from '@/Components/molecules/chat/MessageRow'
import { getChatMessages } from '@/Services/modules/chat/chat'
import { useTranslation } from 'react-i18next'
import Placeholder from '@/Components/molecules/Placeholder'

/**
 * Render a list of message (or a placeholder) and a text input
 */
const Chat = () => {
  const { t } = useTranslation()
  const { Gutters, Layout } = useTheme()

  const [messages, setMessages] = useState<Array<Message> | null>()
  const [error, setError] = useState<Boolean>(false) // TODO: Set back to false after testing

  const fetchMessages = useCallback(async () => {
    await getChatMessages()
      .then(r => setMessages(r))
      .catch(e => setError(e))
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

    // TODO: Do a nice plaholder, use an svg from undraw.co (or other)
    return <Placeholder text={text} />
  }, [error, t])

  return (
    <SafeAreaView
      style={[Layout.fill, Gutters.largeVPadding, Gutters.largeHPadding]}
    >
      {messages || error ? (
        <FlatList
          data={messages}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item: Message) => item.id.toString()}
          ListEmptyComponent={renderPlaceholder}
          inverted={!error}
        />
      ) : (
        <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      )}
    </SafeAreaView>
  )
}

export default Chat
