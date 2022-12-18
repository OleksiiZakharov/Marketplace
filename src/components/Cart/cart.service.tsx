import axios from 'axios'

export const CartService = {
  async itemsList(
    login: string,
    token: string,
    categories: number[],
    grades: number[],
    races: number[],
    onPage: number,
    page: number
  ) {
    return axios.post(
      '/cart/itemsList/',
      {
        login,
        token,
        categories,
        grades,
        races,
        onPage,
        page,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },
  async sellItem(login: string, token: string, itemId: number, price: number) {
    return axios.post(
      '/cart/sellItem/',
      {
        login,
        token,
        itemId,
        price,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  },
}
