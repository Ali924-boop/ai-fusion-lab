"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import ChatInputBox from "./ChatInputBox";

export default function Home() {
  const {setTheme} =useTheme();
  return (
   <div>
    <ChatInputBox />
   </div>
  );
}
