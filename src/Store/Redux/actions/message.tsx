import Message from '@/Types/chat/Message'
import { RESET_MESSAGES, ADD_MESSAGES } from '../constants/message'

export type MessageAction = {
  type: string
  messages: Array<Message>
}

export function resetMessages(messages: Array<Message>) {
  const action: MessageAction = {
    type: RESET_MESSAGES,
    messages,
  }

  return action
}

export function addMessage(message: Message) {
  return addMessages([message])
}

export function addMessages(messages: Array<Message>) {
  const action: MessageAction = {
    type: ADD_MESSAGES,
    messages,
  }

  return action
}
