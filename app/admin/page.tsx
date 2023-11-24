'use client'

import React from 'react'
import CardAdmin from "../components/admin-cards/card-admin"
import AdminHomeHeroLeftSection from "../components/admin-home-sections/admin-home-hero-left-section"
import AdminHomeHeroRightSection from "../components/admin-home-sections/admin-home-hero-right-section"
import AdminHomeAboutLeftSection from "../components/admin-home-sections/admin-home-about-left-section"
import AdminHomeAboutRightSection from "../components/admin-home-sections/admin-home-about-right-section"
import AdminHomeAchievementSection from "../components/admin-home-sections/admin-home-achievement-section"
import AdminHomeNewsSection from "../components/admin-home-sections/admin-home-news-section"
import AdminHomePpdbLeftSection from "../components/admin-home-sections/admin-home-ppdb-left-section"
import AdminHomePpdbRightSection from "../components/admin-home-sections/admin-home-ppdb-right-section"

export default function Admin() {

  return (
    <>
      <div className="flex flex-col w-full p-12 gap-8">
        <CardAdmin title="Hero Section">
          <AdminHomeHeroLeftSection />
          <AdminHomeHeroRightSection />
        </CardAdmin>

        <CardAdmin title="Tentang Kami Section">
          <AdminHomeAboutLeftSection />
          <AdminHomeAboutRightSection />
        </CardAdmin>

        <CardAdmin title="berita & acara terbaru section" seeMoreLink="/">
          <AdminHomeNewsSection />
        </CardAdmin>

        <CardAdmin title="prestasi madrasah section" seeMoreLink="/">
          <AdminHomeAchievementSection />
        </CardAdmin>

        <CardAdmin title="ppdb section" seeMoreLink="/">
          <AdminHomePpdbLeftSection />
          <AdminHomePpdbRightSection />
        </CardAdmin>
      </div >
    </>
  )
}
