import { supabase } from '../../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }
    return NextResponse.redirect(data.url)
  } catch (err) {
    return NextResponse.json(
      { error: 'Google authentication failed' },
      { status: 500 }
    )
  }
}
