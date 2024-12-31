import { HeaederNoAuthComponent } from '@/components/HeaderNoAuth'

const SignUpScreen = () => {
  return (
    <div>
      <HeaederNoAuthComponent
        links={[
          { name: 'Entrar', redirect: '/signin' },
          { name: 'Cadastrar', redirect: '/signup' }
        ]}
      />
      Cadastrar
    </div>
  )
}

export default SignUpScreen
