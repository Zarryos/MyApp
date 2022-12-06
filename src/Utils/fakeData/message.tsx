import { store } from '@/Store'
import { addMessage } from '@/Store/Redux/actions/message'
import Message from '@/Types/chat/Message'
import { contactFakeUser } from './user'

const usedMessageIds: Array<number> = [0]
const availableMessagesContent: Array<String> = [
  'You think so?',
  "You've got fat.",
  'Where is your favorite hammer now?',
  'Snap!',
  "You're a boring god",
  'Tell me more',
  'I could use a drink',
  "Avengers, please don't assemble!",
  'My favorite god has always being Loki',
  'Love the new haircut!',
]

/**
 * Generate a number that is not used by any other messages
 * @returns A Number, representing an available message id
 */
export function generateMessageId() {
  // This is not optimize to fill ids the best way, but just to ensure unique id for this MVP project
  const availableId: number = Math.max(...usedMessageIds) + 1
  usedMessageIds.push(availableId)
  return availableId
}

/**
 * Burn a string from an array
 * @returns A random message content
 */
function generateMessageText(): String {
  // Get a random index
  const i = Math.floor(Math.random() * availableMessagesContent.length)

  // Return the random element
  return availableMessagesContent[i]
}

/**
 * Generate a message
 */
export function generateChatMessageAsContact() {
  const contactMessage: Message = {
    id: generateMessageId(),
    dateString: new Date().toLocaleDateString('en-US'),
    content: generateMessageText(),
    author: contactFakeUser,
  }

  // Success! Dispatch created message in redux
  store.dispatch(addMessage(contactMessage))
}
