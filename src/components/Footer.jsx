import Image from "next/image";
import Link from "next/link";
import fb from "public/facebook.png"
import ig from "public/instagram.png"
import tw from "public/twitter.png"

export default function Footer(){
  return(
    <footer className="flex flex-col items-center justify-between gap-5 mb-10 text-center md:text-left md:flex-row">
      <div className="text-xs">
        <p className="inline-block font-bold text-black uppercase">this is a demo. Please </p>
        <Link href="https://isabella-laschi.vercel.app/" className="mx-1 font-black uppercase transition text-violet-700 hover:text-violet-500" target="_blank">Visit my portfolio</Link>
        <p className="inline-block font-bold text-black uppercase">for more.</p>
        <br />
        <p className="mt-1">@2023 laschisa. All rights reserved.</p>
      </div>
      <div className="flex gap-2">
        <Image src={fb} alt="" width={100} height={100}  className="w-8 h-8 cursor-pointer"/>
        <Image src={ig} alt="" width={100} height={100} className="w-8 h-8 cursor-pointer"/>
        <Image src={tw} alt="" width={100} height={100} className="w-8 h-8 cursor-pointer"/>
      </div>
    </footer>
  )
} 