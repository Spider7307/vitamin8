export const instant = false

export default async function UserProfile({ params }) {
  const { id } = await params

  return (
    <div>
      <h1>User Profile: {id}</h1>
    </div>
  )
}