"use client";
import React, { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader"
import { useUser } from "@clerk/nextjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/FireBaseconfig";

function Provider({ children, ...props }) {

  const {user}=useUser ();

  const CreateNewuser = async () => {

    //if user not exist?
    const userRef = doc(db,"users",user?.primaryEmailAddress?.emailAddress);

    const userSnap=await getDoc(userRef);

    if(userSnap.exists())
      {
        console.log("Existing user");
        return;
      }else{
        const userData={
          name:user?.fullName,
          email:user?.primaryEmailAddress?.emailAddress,
          createdAt: new Date(),
          remainingMsg: 5,//Only for free users
          plan:"Free",
          credits:1000, // Only for paid users
        };
        await setDoc(userRef,userData);
        console.log("New user data saved ");

        //If Not Then Insert

      }    
    };

      useEffect(()=>{ 
    if(user){
      CreateNewuser();
    }
    }, [user]);
      
        

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSidebar />
           
        <div className="w-full">
          <AppHeader/>
          {children}</div>
      </SidebarProvider>
    </NextThemesProvider>
  );
}

export default Provider;
