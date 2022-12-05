import { FakeMessages } from '@/Utils/fakeData/chat'

export async function getChatMessages() {
  // TODO: Connect the API
  // Fetching the messages... (not really)
  await new Promise(resolve =>
    setTimeout(() => {
      resolve(true)
    }, 500),
  )

  return FakeMessages
}

export async function createChatMessage(text: String) {
  // TODO: Connect the API
  // Creating a message... (not really)
  await new Promise(resolve =>
    setTimeout(() => {
      resolve(true)
    }, 500),
  )

  // Simulate a success
  return !!text
}
