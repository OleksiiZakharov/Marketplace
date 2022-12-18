import axios from 'axios'

export const ItemsService = {
  async getItems(
    page: number,
    perPage: number,
    categories: number[],
    grades: number[],
    races: number[]
  ) {
    return axios.post(
      '/auction/itemsList',
      {
        itemsPerPage: perPage,
        currentPage: page,
        categories,
        grades,
        races,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },

  async buyItem(login: string, token: string, itemId: number) {
    return axios.post(
      '/auction/buyItem',
      {
        login,
        token,
        itemId,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },
}
