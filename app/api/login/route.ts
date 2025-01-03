import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const request = await req.json()
  const { email, password } = request
  try {
  } catch (error) {
    console.log(error)
    return new NextResponse('Error', { headers: {} })
  }
  console.log({ email, password })
  return NextResponse.json({
    jwt: 'asd'
  })
}

export async function GET() {
  return NextResponse.json({
    jwt: 'asd'
  })
}
