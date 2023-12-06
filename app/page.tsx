import Image from 'next/image'
import NavigationBar from './components/navigation-bar-home'
import HeroHome from "./components/hero-home"
import AboutCardHome from "./components/about-card-home"
import NewsHome from "./components/news-home"
import AchievementHome from "./components/achievement-home"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <NavigationBar/>

      <div className="flex flex-col gap-24">
        <HeroHome></HeroHome>
        <AboutCardHome
        
          title="Madrasah Ibtidaiyah Silahul Ulum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgModelSrc="/assets/img/about-model.png"
          isAbout
          />
        <NewsHome/>
        <AchievementHome/>
        <AboutCardHome
          title="Informasi Pendaftaran Siswa Didik Baru"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          imgModelSrc="/assets/img/ppdb-model.png"/>
        <Footer/>
      </div>

    </>
  )
}
