import { FieldError, FormState, UseFormRegister } from 'react-hook-form'
import { ILoginForm } from '../../../interface/IAccount'
import { IRegisterOptions } from '../../../interface/ICommon'

interface IInputProps {
  register: UseFormRegister<ILoginForm>
  formState: FormState<ILoginForm>
  label: string
  name: keyof ILoginForm
  type: string
  registerOptions?: IRegisterOptions
}

export default function InputAccountField({
  register,
  formState,
  label,
  name,
  type,
  registerOptions,
}: IInputProps) {
  const { errors } = formState
  const errorMsg: FieldError | undefined = errors[name]

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        {...register(name, registerOptions)}
        autoComplete="false"
      />
      <div style={{ color: '#ffa500' }}>
        {errors[name] ? (
          <p className="text-center">{errorMsg?.message}</p>
        ) : null}
      </div>
    </div>
  )
}
