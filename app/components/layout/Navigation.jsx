"use client"

import Link from "next/link"
import {
  Home,
  PenTool,
  Map,
  Layers,
  Folder,
  Bookmark
} from "lucide-react"

export default function Navigation() {
  const navigationItems = [
    { icon: Home, label: "Home", active: true, number: 1 },
    { icon: PenTool, label: "Writing", active: false, number: 2 },
    { icon: Map, label: "Journey", active: false, number: 3 },
    { icon: Layers, label: "Stack", active: false, number: 4 },
    { icon: Folder, label: "Workspace", active: false, number: 5 },
    { icon: Bookmark, label: "Bookmarks", active: false, number: 6 }
  ]

  return (
    <nav className="flex-1">
      <div className="px-3 py-2 space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href="#"
            className={`flex items-center justify-between px-3 py-2 ${
              item.active
                ? "bg-black text-white"
                : "text-gray-800 hover:bg-gray-100"
            } rounded-md transition-all duration-200 hover:scale-[1.02] hover:shadow-${item.active ? "md" : "sm"}`}
          >
            <div className="flex items-center">
              <item.icon className="h-4 w-4 mr-3" />
              <span>{item.label}</span>
            </div>
            <span className={`${item.active ? "bg-gray-600" : "bg-gray-200"} text-xs font-medium rounded px-1.5`}>
              {item.number}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}