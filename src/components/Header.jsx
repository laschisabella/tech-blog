"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import logo from "public/2.png"

const links = [
  {
    id: 1,
    title: 'home',
    url: '/',
  },
  {
    id: 2,
    title: 'gallery',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 5,
    title: 'About',
    url: '/about',
  },
]

export default function Header(){

  const session = useSession()

  return(
    <header className="flex flex-col items-center justify-between gap-8 px-4 py-3 my-5 bg-white md:flex-row rounded-2xl">
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} width={100} height={100} alt="" className="w-12 rounded-md"/>
          <div className="leading-tight text-md">
            <p className="font-black uppercase text-purple-950">laschisa</p>
            <p className="text-xs font-bold uppercase">tech blog</p>
          </div>
        </Link>
      </div>
      {
        session.status === "authenticated" && (
        <div className="flex flex-col items-center gap-0 lg:gap-3 lg:flex-row">
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            {
              session.data.user?.image && (
                <Image src={session.data.user?.image} width={50} height={50} alt="" className="w-10 h-10 rounded-full"/>
              )
            }
            <p>Hello, {session.data.user?.name}!</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="text-sm font-black uppercase transition text-violet-800 hover:text-violet-600">start posting </Link>
            <p className="">|</p>
            <button onClick={signOut} className="text-sm font-black uppercase transition hover:text-gray-600">log out</button>
          </div>
        </div>
        )
      }
      <ul className="flex items-center gap-5 mr-5 ">
        {
          links.map(link => (
            <li key={link.id} className="text-sm font-black uppercase transition hover:text-gray-600">
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))
        }
      </ul>
    </header>
  )
}