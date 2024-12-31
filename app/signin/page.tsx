import Image from 'next/image'
import { HeaederNoAuthComponent } from '@/components/HeaderNoAuth'

import { SignInForm } from './form'

const SignInScreen = () => {
  return (
    <>
      <HeaederNoAuthComponent
        links={[
          { name: 'Entrar', redirect: '/signin' },
          { name: 'Cadastrar', redirect: '/signup' }
        ]}
      />
      <div className="flex flex-1 w-[100vw] min-h-[90vh] bg-primary max-h-full">
        <div className="flex flex-1 relative">
          <Image
            src={'/prediosNaCidade.jpg'}
            alt="Condominios da cidade"
            fill
            className="absolute object-fill"
          />
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-t from-black/75 to-black/5" />
        </div>
        <div
          className="flex flex-col w-[40vw] top-0 bottom-0  items-center
      justify-center"
        >
          <SignInForm />
        </div>
      </div>
    </>
  )
}

export default SignInScreen
