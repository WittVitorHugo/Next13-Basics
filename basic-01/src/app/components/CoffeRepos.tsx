export async function CoffeeRepos() {

  const [resp1, reps2] = await Promise.all([
    fetch('https://api.github.com/users/WittVitorHugo'),
    fetch('https://api.github.com/users/WittVitorHugo/repos')
  ])

const user = await resp1.json()
const repos = await reps2.json()

  return (
    <div>
      <h1>Coffee Repos</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(repos, null, 2)}</pre>    
    </div>
  )
  
}