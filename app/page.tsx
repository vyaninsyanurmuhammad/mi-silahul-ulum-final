import Image from 'next/image'
import NavigationBar from './components/navigation-bar'
import HeroHome from "./components/hero-home"
import AboutCardHome from "./components/about-card-home"
import NewsHome from "./components/news-home"

export default function Home() {
  return (
    <>
      <NavigationBar></NavigationBar>

      <div className="flex flex-col gap-16">
        <HeroHome></HeroHome>
        <AboutCardHome></AboutCardHome>
        <NewsHome></NewsHome>
      </div>

    </>
  )
}
