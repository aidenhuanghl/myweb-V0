"use client"

import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="p-4 flex items-center space-x-3 mb-4 transition-all duration-300 hover:bg-gray-50 rounded-lg">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCR-20250309-tmhe-gdvC14QXQ0j7iNRVt4uzc1uAfSMW7M.jpeg"
        alt="Profile picture"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <h2 className="font-semibold text-lg">Onur Şuvalçınkaya</h2>
        <p className="text-gray-500 text-sm">Software Engineer</p>
      </div>
    </div>
  )
}