import { validateCallback } from '@/lib/callback'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const result = validateCallback(body)

  if (!result.ok) {
    return Response.json({ errors: result.errors }, { status: 422 })
  }

  return Response.json({ message: `Спасибо, ${result.data.name}! Перезвоним в течение часа с 9:00 до 21:00.` })
}
