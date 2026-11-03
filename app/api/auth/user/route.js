
import { supabase } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { data, error } = await supabase.auth.getUser()
    if (error) {
      return NextResponse.json(
        { error },
        { status: 401 }
      )
    }
    return NextResponse.json(
      { data },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      { error: { message: 'Unable to retrieve user' } },
      { status: 500 }
    )
  }
}
