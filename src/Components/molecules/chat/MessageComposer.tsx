import { useTheme } from '@/Hooks'
import React, { createRef, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  View,
  TextInput,
  Button,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native'

/**
 * Render a text input that trigger an event on done
 * @param props onDone, the action trigerred when the user press the send button
 */
const MessageComposer = (props: { onDone: Function }) => {
  const { t } = useTranslation()
  const { Layout, Gutters, Colors } = useTheme()

  const [text, setText] = useState<String | null>()

  // Text input ref
  const inputRef = createRef<TextInput>()

  /**
   * Trigger when the text input content did change
   */
  const onChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    setText(e.nativeEvent.text)
  }

  /**
   * Clear the text input and the associated state
   */
  const clearInput = useCallback(() => {
    setText(null)
    inputRef.current?.clear()
  }, [inputRef])

  // TODO: Add a defaultText prop to inject a default text (ex usecase: previously written message)
  return (
    <View
      style={[
        Layout.row,
        Gutters.regularVPadding,
        Gutters.regularHPadding,
        { backgroundColor: Colors.inputBackground },
      ]}
    >
      <TextInput
        ref={inputRef}
        style={Layout.fill}
        onChange={onChange}
        multiline
      />
      <Button
        title={t('chat.messageComposer.send')}
        accessibilityLabel={t('chat.messageComposer.send')}
        onPress={() => {
          props.onDone(text)
          clearInput()
        }}
      />
    </View>
  )
}

export default MessageComposer
