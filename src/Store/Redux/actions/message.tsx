import Message from '@/Types/chat/Message'
import { RESET_MESSAGES, ADD_MESSAGES } from '../constants/message'

export type MessageAction = {
  type: string
  messages: Array<Message>
}

/**
 * Reset the message store with the specified array of messages
 * @param messages Array of messages
 */
export function resetMessages(messages: Array<Message>) {
  const action: MessageAction = {
    type: RESET_MESSAGES,
    messages,
  }

  return action
}

/**
 * Add one message in the store
 * @param message Message to add
 */
export function addMessage(message: Message) {
  return addMessages([message])
}

/**
 * Add a list of messages in the store
 * @param messages Messages to add
 */
export function addMessages(messages: Array<Message>) {
  const action: MessageAction = {
    type: ADD_MESSAGES,
    messages,
  }

  return action
}
