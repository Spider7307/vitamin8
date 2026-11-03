"use client"
import { useState } from 'react'

export default function AuthStatus() {
    const [status, setStatus] = useState(null)
    const checkStatus = async () => {
    const res = await fetch('/api/auth/user')
    const data = await res.json()
    if (data.data?.user) {
      setStatus(data.data.user.email)
    } else {
      setStatus("Not Logged In")
    }
  }
  return (
    <div style={{
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h3>Auth Status</h3>
      <button onClick={checkStatus}>
        Check Login Status
      </button>
      <p>
        {status === null
          ? "Click button to check"
          : status}
      </p>
    </div>
  )
}
