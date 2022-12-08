import { SubmitHandler, useForm } from 'react-hook-form'
import { ILoginForm } from '../../interface/IAccount'
import InputForm from './forms/InputAccountField'
import css from './css/loginform.module.css'
import { RegistrationApi } from './UserApi'

export default function Registration() {
  const { isLoading, mutateAsync } = RegistrationApi()

  const onSubmit: SubmitHandler<ILoginForm> = (fields) => {
    const { login, password } = fields
    mutateAsync({ login, password })
    reset()
  }

  const { register, handleSubmit, formState, reset } = useForm<ILoginForm>({
    mode: 'onBlur',
  })

  return (
    <div className="row justify-content-md-center">
      <div
        className={`${css.formBlock} col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4`}
      >
        {isLoading ? <div className="text-center">Loading...</div> : null}
        {!isLoading ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <legend className="text-center">Registration</legend>
            <div className="mb-3">
              <InputForm
                register={register}
                formState={formState}
                label="Login"
                name="login"
                type="text"
                registerOptions={{
                  required: 'Login required',
                  maxLength: {
                    value: 10,
                    message: '3-10 characters',
                  },
                  minLength: {
                    value: 3,
                    message: '3-10 characters',
                  },
                  pattern: {
                    value: /^[a-z0-9_]+$/i,
                    message: 'Allowed characters, numbers and sumbol _',
                  },
                }}
              />
            </div>
            <div className="mb-3">
              <InputForm
                register={register}
                formState={formState}
                label="Password"
                name="password"
                type="password"
                registerOptions={{
                  required: 'Password required',
                  maxLength: {
                    value: 20,
                    message: '6-20 characters',
                  },
                  minLength: {
                    value: 4,
                    message: '4-20 characters',
                  },
                  pattern: {
                    value: /^[a-z0-9_!,.<>]+$/i,
                    message:
                      'Allowed characters, numbers and sumbols _ ! , . < >',
                  },
                }}
              />
            </div>

            <input
              className="btn btn-success col-12"
              type="submit"
              value="Submit"
              disabled={!formState.isValid}
            />
          </form>
        ) : null}
      </div>
    </div>
  )
}
