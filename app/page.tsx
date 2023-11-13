import Image from 'next/image'
import NavigationBar from './components/navigation-bar'
import HeroHome from "./components/hero-home"
import AboutCardHome from "./components/about-card-home"

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HeroHome></HeroHome>
      <AboutCardHome></AboutCardHome>
      <div>
        Home
      </div>

    </>
  )
}
