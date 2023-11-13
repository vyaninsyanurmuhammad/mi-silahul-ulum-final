import Image from 'next/image'
import NavigationBar from './components/navigation-bar'
import HeroHome from "./components/hero-home"

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeroHome></HeroHome>
      <div>
        Home
      </div>

    </>
  )
}
