"use client"

import ProfileSection from '../profile/ProfileSection'
import Navigation from './Navigation'
import SocialLinks from '../social/SocialLinks'

export default function Sidebar() {
  return (
    <div className="w-64 border-r overflow-y-auto flex flex-col">
      <ProfileSection />
      <Navigation />
      <SocialLinks />
    </div>
  )
}