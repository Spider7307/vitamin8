import { supabase } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      return NextResponse.json(
        { error },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { data },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: { message: 'Invalid request' } },
      { status: 400 }
    )
  }
}