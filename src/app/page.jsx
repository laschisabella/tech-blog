import Image from "next/image";
import Link from "next/link";
import homePic from 'public/home.png'

export default function Home() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-5 px-5 py-16 md:py-10 md:gap-16 md:flex-row">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-black text-center text-transparent md:text-left md:text-5xl bg-gradient-to-b from-violet-950 to-violet-500 bg-clip-text">
          Welcome to the best community for designers and developers
        </h1>
        <p className="my-8 text-lg text-center md:text-left md:text-2xl">
          Register now to join the discussion about modern UI&apos;s and performatic applications.
        </p>
        <Link href="/dashboard" className="px-10 py-2 mx-auto font-bold transition bg-pink-500 rounded md:mx-0 text-violet-100 hover:bg-pink-700">START RIGHT NOW</Link>
      </div>
      <Image src={homePic} width={800} height={800} alt="" className="w-4/5 ml-3 md:w-2/5 picAnimation"/>
    </div>
  )
}
