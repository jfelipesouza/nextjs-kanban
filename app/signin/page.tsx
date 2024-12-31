import Image from 'next/image'
import { SignInForm } from './form'

const SignInScreen = () => {
  return (
    <div className="flex flex-1 w-[100vw] min-h-[90vh] max-h-full">
      <div className="flex flex-1 relative">
        <Image
          src={'/next.svg'}
          alt="Condominios da cidade"
          fill
          className="absolute object-fill"
        />
      </div>
      <div
        className="flex flex-col w-[40vw] top-0 bottom-0 bg-primary items-center
      justify-center"
      >
        <SignInForm />
      </div>
    </div>
  )
}

export default SignInScreen
