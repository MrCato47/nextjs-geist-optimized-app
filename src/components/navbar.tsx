"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">SYSCOM</div>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Buscar productos..." 
                className="w-full pr-10"
              />
              <button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>
          </div>
          <nav>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Button variant="ghost" className="hover:bg-gray-100">
                    Iniciar Sesión
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="bg-black hover:bg-gray-800">
                    Registrarse
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
