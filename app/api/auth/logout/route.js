import { supabase } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      return NextResponse.json(
        { error },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { message: 'Logged out successfully' },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: { message: 'Logout failed' } },
      { status: 500 }
    )
  }
}