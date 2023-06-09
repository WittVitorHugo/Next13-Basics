import { User } from "./components/User"
import { Repo} from "./components/Repo"

export default function Home() {
  
  return (
    <div>
      <h1>Home</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />
      
      {/* @ts-expect-error Async Server Component */}
      <Repo />
    </div>
  )
}
