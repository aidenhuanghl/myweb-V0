"use client"

import Link from "next/link"
import {
  Twitter,
  Github,
  Linkedin,
  FileText,
  Instagram,
  Cloud,
  Youtube,
  AtSign,
  BookOpen,
  Share2,
  ExternalLink
} from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { icon: Twitter, label: "X (Twitter)" },
    { icon: Github, label: "GitHub" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: FileText, label: "Medium" },
    { icon: Instagram, label: "Instagram" },
    { icon: Cloud, label: "Soundcloud" },
    { icon: Youtube, label: "YouTube" },
    { icon: AtSign, label: "Bluesky" },
    { icon: BookOpen, label: "Read.cv" },
    { icon: Share2, label: "Pinterest" }
  ]

  return (
    <div className="px-4 pt-6 pb-4">
      <h3 className="text-sm font-medium text-gray-900 mb-3">Online</h3>
      <div className="space-y-2">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href="#"
            className="flex items-center justify-between text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 hover:translate-x-1 hover:font-medium"
          >
            <div className="flex items-center">
              <link.icon className="h-4 w-4 mr-3" />
              <span>{link.label}</span>
            </div>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        ))}
      </div>
    </div>
  )
}