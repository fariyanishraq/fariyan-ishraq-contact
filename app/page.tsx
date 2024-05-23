import WhatsappBtn from "@/components/ui/whatsappBtn";
import ProfilePic from "../assets/profile_pic.jpg";
import Image from "next/image";
import React from "react";
import { FaSquareFacebook, FaSquareInstagram, FaSquareThreads, FaSquareGithub } from "react-icons/fa6";
import WechatBtn from "@/components/ui/wechatBtn";

type ContactType = {
  id?: number;
  name?: string;
  link?: string;
  icon?: React.ReactNode;
}[];

export default function Home() {
  const contactLinks: ContactType = [
    {
      id: 0,
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61559728107149",
      icon: <FaSquareFacebook />,
    },
    {
      id: 1,
      name:'Facebook- Stride Global',
      link:'https://www.facebook.com/profile.php?id=61560068546592',
      icon: <FaSquareFacebook/>
    },
    {
      id: 2,
      name:'Facebook- stride.sole',
      link:'https://www.facebook.com/profile.php?id=61558980573091',
      icon: <FaSquareFacebook/>
    },
    {
      id: 3,
      name: 'Instagram',
      link:"https://www.instagram.com/ishraq_fariyan/",
      icon:<FaSquareInstagram/>
    },
    {
      id: 4,
      name:'Threads',
      link:'https://www.threads.net/@ishraq_fariyan',
      icon:<FaSquareThreads/>
    },
    {
      id: 5,
      name: 'Github',
      link:'https://github.com/fariyanishraq',
      icon: <FaSquareGithub/>
    }
  ];
  return (
    <main className="flex justify-center h-screen items-center">
      <div>
        <div className="flex flex-col  gap-5">
          <div className="flex flex-col items-center gap-4">
            <Image
              className="rounded-full"
              width={100}
              src={ProfilePic}
              alt="profile-pic"
            />
            <h1 className="text-[25px] font-bold">Fariyan Ishraq</h1>
          </div>
          <div>
            <p className="text-gray-300 text-center max-md:w-[400px]">
              Hi, I am a passionate web developer, student of Hotel Management
              and an upcoming entrepreneur.{" "}
            </p>
          </div>
          <div className="flex w-full justify-center items-center gap-5">
            <WhatsappBtn/>
            <WechatBtn/>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <p className="text-[18px] font-bold">Contact Links</p>
              <div className="w-full flex flex-col items-center gap-3">
                {contactLinks.map((index) => (
                  <a
                    className="link"
                    key={index.id}
                    href={`${index.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{index.icon}</span>
                    <span>{index.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
