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
