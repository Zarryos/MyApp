const usedMessageIds: Array<number> = [0]

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
