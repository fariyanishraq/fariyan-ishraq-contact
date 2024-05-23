"use client";
import { Button } from "./button";
import { FaWhatsapp } from "react-icons/fa6";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

import Image from "next/image";

import WhatsappCode from "../../assets/whatsappcode.jpg";
import { useState } from "react";

export default function WhatsappBtn() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("+8801712578968");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="default">
            <FaWhatsapp />
            Whatsapp
          </Button>
        </DrawerTrigger>
        <DrawerContent className="flex w-full flex-col p-2 justify-center items-center gap-3">
          <DrawerHeader>
            <DrawerTitle className="flex justify-center items-center gap-2">
              <FaWhatsapp /> Whatsapp
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription>Scan or copy the number</DrawerDescription>
          <div className="flex justify-center items-center gap-4">
            <h1 className="p-2 border rounded-md">+880 1712578968</h1>
            <Button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</Button>
          </div>
          <Image
            className="rounded-md"
            width={350}
            src={WhatsappCode}
            alt="code"
          />
          <DrawerFooter>
            <DrawerClose>
              <Button variant="destructive">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
