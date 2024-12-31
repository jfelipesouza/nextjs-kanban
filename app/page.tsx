import { HeaederNoAuthComponent } from '@/components/HeaderNoAuth'

export default function Home() {
  return (
    <>
      <HeaederNoAuthComponent
        links={[
          { name: 'Entrar', redirect: '/signin' },
          { name: 'Cadastrar', redirect: '/signup' }
        ]}
      />
      <div className="flex flex-1 flex-col px-8 py-5"></div>
    </>
  )
}
