export default function Page({home, signin}) {
  
  const isLoggedIn = false

  return (
    isLoggedIn ? home : signin
  )
}
