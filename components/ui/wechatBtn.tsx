"use client";
import { Button } from "./button";
import { BsDownload, BsWechat } from "react-icons/bs";
import {
  Drawer,
  DrawerTrigger,
  DrawerTitle,
  DrawerContent,
  DrawerHeader,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "./drawer";
import Image from "next/image";
import wechatCode from '../../assets/wechatcode.jpg'

export default function WechatBtn() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">
        <BsWechat />
        WeChat
      </Button>
        </DrawerTrigger>
       <DrawerContent className="flex w-full flex-col p-2 justify-center items-center gap-1">
          <DrawerHeader>
            <DrawerTitle className="flex justify-center items-center gap-2">
              <BsWechat /> Wechat
            </DrawerTitle>
          </DrawerHeader>
          <DrawerDescription>Scan the QR code</DrawerDescription>
          <Image className="rounded-md"  width={350} src={wechatCode} alt='code'/>
          <DrawerFooter className="flex justify-center items-center gap-3">
            <a className="link" href='/wechatcode.jpg' download='wechat.jpg'><BsDownload/> Download</a>
            <DrawerClose>
              <Button variant='destructive'>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
