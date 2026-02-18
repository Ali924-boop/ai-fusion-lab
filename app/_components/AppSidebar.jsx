"use client"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Sun, Moon, User2, Bolt, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"
import { SignInButton, useUser } from "@clerk/nextjs"
import UsageCreditProgres from "../UsageCreditProgres"

export function AppSidebar() {
  const {theme, setTheme}=useTheme()
  const [mounted, setMounted] = useState(false)
  const {user}=useUser();

useEffect(() => {
  setMounted(true)
}, [])


  return (
    <Sidebar>
      <SidebarHeader >
        <div className="p-3">
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} alt="Logo" width={60} height={60}
        className="w-[45px] h-[40px]"  />
        <h2 className="font-bold text-xl">Ai Fusion</h2>
        </div>
        <div>
          {mounted && (theme=='light' ? <Button variant={'ghost'} onClick={()=>setTheme('dark')}><Sun/></Button>
          : <Button onClick={()=>setTheme('light')}><Moon/></Button>)}
        </div>
        </div>
        {user ?
        <Button className='mt-7 w-full' size='lg' >+ New Chat</Button>:
        <SignInButton>
        <Button className='mt-7 w-full' size='lg' >+ New Chat</Button>  
        </SignInButton>
        }
        </div>
         
        </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className={"p-3"}>
          <h2 className="font-bold text-lg">Chat</h2>
          {!user&&<p className="text-sm text-gray-400">Sign in to start chatting With multiple AI model</p>
}
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <div className="p-3 mb-10">
        {!user ? <SignInButton mode="modal">
        <Button className={'w-full'} size={'lg'}>Sign In/Sign Up</Button>
        </SignInButton>
        :
        <div>
          <UsageCreditProgres/>
          <Button className={'w-full mb-3'}> <Zap/>Upgrade Plan</Button>
        <Button className="flex" variant={'ghost'}>
          <User2/> <h2>Settings</h2>
        </Button>
        </div>
        }
      </div>
    </Sidebar>
  )
}