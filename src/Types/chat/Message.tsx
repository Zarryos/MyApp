import Author from '../user/Author'

interface Message {
  id: Number
  dateString: String
  author: Author
  content: String
}

export default Message
