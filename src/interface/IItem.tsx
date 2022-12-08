export interface IItemParams {
  abilities: [{ num: number; val: number }]
  attack: {
    gamin: number
    gamax: number
    mamin: number
    mamax: number
  }
  defence: number
  grade: number
  icon: {
    sprite: string
    x: number
    y: number
  }
  id: string
  level: number
  name: string
  pt_type: number
  pt_val: number
  race: number
  resistance: {
    fire: number
    water: number
    earth: number
    wind: number
  }
  type: string
  upgrade: string
}

export interface IItemsListApiResponce {
  data: IItemParams
  id: number
  price: number
  is_active: boolean
  owner_id: number
}

export interface IItemSellForm {
  price: number
  itemId: number
}
