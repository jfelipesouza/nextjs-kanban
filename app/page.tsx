import { SignInAndSignUpFormComponent } from '@/components/SignInAndSignUpForm'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col relative items-center justify-center bg-primary min-h-[100vh] max-h-[100vh] px-8 py-5">
      <SignInAndSignUpFormComponent />
    </div>
  )
}
