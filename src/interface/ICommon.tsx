interface IRegisterOptionExtended {
  value: number
  message: string
}

interface IRegExPattern {
  value: RegExp
  message: string
}

export interface IRegisterOptions {
  required?: string
  maxLength?: number | IRegisterOptionExtended
  minLength?: number | IRegisterOptionExtended
  max?: number | IRegisterOptionExtended
  min?: number | IRegisterOptionExtended
  pattern?: IRegExPattern
}
