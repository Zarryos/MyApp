import Message from '@/Types/chat/Message'
import { contactFakeUser } from './user'

// A starter fake message list
export const fakeMessages: [Message] = [
  {
    id: 0,
    dateString: new Date().toLocaleDateString('en-US'),
    author: contactFakeUser,
    content: "You should've gone for the head ;)",
  },
]
