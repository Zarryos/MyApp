import Message from '@/Types/chat/Message'
import { MessageAction } from '../actions/message'
import { ADD_MESSAGES, RESET_MESSAGES } from '../constants/message'

export type ChatState = {
  messages: Array<Message>
}

const initialState: ChatState = {
  messages: [],
}

const chat = (
  state: ChatState = initialState,
  action: MessageAction,
): ChatState => {
  switch (action.type) {
    case RESET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      }
    case ADD_MESSAGES:
      // TODO: With a real back-end and realtime message stream, we could use an UPDATE_MESSAGE instead
      // Storing the messages by their ids would be great to ensure there is no duplicate messages, for example
      return {
        ...state,
        messages: action.messages.concat(state.messages),
      }
  }
  return state
}

export default chat
