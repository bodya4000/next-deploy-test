import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { text } = await req.json()

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text,
      }),
    }
  )

  const data = await telegramRes.json()
  return NextResponse.json(data)
}
