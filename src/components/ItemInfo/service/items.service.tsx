import axios from 'axios'

export const ItemsService = {
  async infoById(itemId: number) {
    return await axios.post(
      '/items/itembyid/',
      {
        itemId,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },
  async tradeHistory(itemId: number) {
    return await axios.post(
      '/items/tradehistory/',
      {
        itemId,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },
}
