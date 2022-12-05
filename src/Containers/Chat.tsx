import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import Message from '@/Types/chat/Message'
import MessageRow from '@/Components/molecules/chat/MessageRow'

// TODO: Move fake data
const DATA: [Message] = [
  { id: 0, author: { id: 0, name: 'Bot' }, content: 'Hello I am a bot' },
]

const Chat = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  // TODO: Fetch initial fake data
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  // Chat message renderer
  const renderItem = (message: Message) => <MessageRow message={message} />

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: Message) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default Chat
