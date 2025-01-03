import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SigninForm } from './SignInForm'

export const SignInAndSignUpFormComponent = () => {
  return (
    <Tabs defaultValue="signin" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">Entrar</TabsTrigger>
        <TabsTrigger value="signup">Cadastrar</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <Card>
          <CardHeader>
            <CardTitle>Faça o seu login</CardTitle>
            <CardDescription>
              Entre agora e não perca as noticias atuais do seu lar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <SigninForm />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Venha fazer parte</CardTitle>
            <CardDescription>
              Crie sua conta gratuita e fique por dentro das ultimas informaçõs
              do seu lar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="Digite o seu melhor e-mail"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="Entre com uma senha forte"
                type="password"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confime a sua senha</Label>
              <Input
                id="confirmPassword"
                placeholder="Confirme a sua senha"
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Cadastrar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
