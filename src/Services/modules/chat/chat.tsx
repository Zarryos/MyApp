import { store } from '@/Store'
import { addMessage, resetMessages } from '@/Store/Redux/actions/message'
import Message from '@/Types/chat/Message'
import { fakeMessages } from '@/Utils/fakeData/chat'
import { generateMessageId } from '@/Utils/fakeData/message'
import { myFakeUser } from '@/Utils/fakeData/user'

/**
 * Get all chat messages and dispatch them to the store
 * @returns Success, true or false
 */
export async function getChatMessages() {
  // TODO: Connect the API
  // Fetching the messages... (not really)
  await new Promise(resolve =>
    setTimeout(() => {
      resolve(true)
    }, 500),
  )

  // Success! Dispatch retreived messages in redux
  store.dispatch(resetMessages(fakeMessages))

  // TODO: Handle api error
  // Simulate a success
  return true
}

/**
 * Create a chat message and dispatch it to the store
 * @returns Success, true or false
 */
export async function createChatMessage(text: String) {
  // TODO: Connect the API
  // Creating a message... (not really)
  await new Promise(resolve =>
    setTimeout(() => {
      resolve(true)
    }, 500),
  )

  // TODO: Use the mapper on the api response (and write the mapper oc!)
  const createdMessage: Message = {
    id: generateMessageId(),
    dateString: new Date().toLocaleDateString('en-US'),
    content: text,
    author: myFakeUser,
  }

  // Success! Dispatch created message in redux
  store.dispatch(addMessage(createdMessage))

  // TODO: Handle api error
  // Simulate a success
  return true
}
