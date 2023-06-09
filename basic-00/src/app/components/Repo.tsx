export async function Repo() {

  const response = await fetch('https://api.github.com/users/VitorWittPro/repos', {
    cache: 'no-store'
  })

  const repos = await response.json()

  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 3)}</pre>
    </div>
  )
}