import AuthStatus from './components/AuthStatus'
export default function HomePage() {
  return (
    <div>
      <h1>Welcome to AuthVitamin!</h1>
      <p>This text was rendered on the server.</p>
      <AuthStatus />
    </div>
  )
}
